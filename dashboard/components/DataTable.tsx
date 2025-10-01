"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  Header,
} from "@tanstack/react-table";
import { useTablePreferences } from "@/stores/tablePreferences";
import { Settings, Eye, EyeOff, RotateCcw, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Draggable header component
function DraggableTableHeader<TData>({ header }: { header: Header<TData, unknown> }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: header.column.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <th
      ref={setNodeRef}
      style={style}
      className={cn(
        "px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider relative group",
        isDragging && "z-50 bg-gray-100 shadow-lg"
      )}
    >
      <div className="flex items-center gap-2">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing hover:bg-gray-200 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <GripVertical className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex-1">
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </div>
      </div>
    </th>
  );
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [showSettings, setShowSettings] = useState(false);

  const {
    columnVisibility,
    columnOrder,
    setColumnVisibility,
    setColumnOrder,
    resetPreferences,
  } = useTablePreferences();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    state: {
      sorting,
      columnVisibility,
      columnOrder,
    },
  });

  // Setup drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag end
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = columnOrder.indexOf(active.id as string);
      const newIndex = columnOrder.indexOf(over.id as string);
      const newOrder = arrayMove(columnOrder, oldIndex, newIndex);
      setColumnOrder(newOrder);
    }
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">
            Production Requests ({data.length})
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors",
              showSettings
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-white border-gray-200 hover:bg-gray-50"
            )}
          >
            <Settings className="w-4 h-4" />
            Column Settings
          </button>
        </div>
      </div>

      {/* Column Settings Panel */}
      {showSettings && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Column Visibility</h3>
            <button
              onClick={resetPreferences}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
            >
              <RotateCcw className="w-3 h-3" />
              Reset to Default
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {table.getAllLeafColumns().map((column) => {
              return (
                <label
                  key={column.id}
                  className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                    className="rounded border-gray-300"
                  />
                  <span className="flex items-center gap-1">
                    {column.getIsVisible() ? (
                      <Eye className="w-3 h-3 text-green-600" />
                    ) : (
                      <EyeOff className="w-3 h-3 text-gray-400" />
                    )}
                    {column.id}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    <SortableContext
                      items={columnOrder}
                      strategy={horizontalListSortingStrategy}
                    >
                      {headerGroup.headers.map((header) => (
                        <DraggableTableHeader key={header.id} header={header} />
                      ))}
                    </SortableContext>
                  </tr>
                ))}
              </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-3 text-sm">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </DndContext>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-sm text-gray-600">
        Showing {table.getRowModel().rows.length} of {data.length} requests
      </div>
    </div>
  );
}
