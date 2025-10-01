"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProductionRequest, PriorityType, StatusType } from "@/types/airtable";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Priority badge component
const PriorityBadge = ({ priority }: { priority: PriorityType }) => {
  const colors = {
    High: "bg-red-100 text-red-800 border-red-200",
    Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Low: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium border",
        colors[priority]
      )}
    >
      {priority}
    </span>
  );
};

// Status badge component
const StatusBadge = ({ status }: { status: StatusType }) => {
  const colors = {
    Queued: "bg-gray-100 text-gray-800 border-gray-200",
    "In Review": "bg-blue-100 text-blue-800 border-blue-200",
    Assigned: "bg-purple-100 text-purple-800 border-purple-200",
    "In Production": "bg-orange-100 text-orange-800 border-orange-200",
    Completed: "bg-green-100 text-green-800 border-green-200",
    Rejected: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium border whitespace-nowrap",
        colors[status]
      )}
    >
      {status}
    </span>
  );
};

// Progress bar component
const ProgressBar = ({ value }: { value: number | unknown }) => {
  // Handle special values from Airtable (e.g., {"specialValue": "NaN"})
  const numValue = typeof value === 'object' && value !== null && 'specialValue' in value ? 0 : (value as number) || 0;
  const percentage = Math.round(numValue * 100);

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all",
            percentage === 100
              ? "bg-green-500"
              : percentage >= 50
              ? "bg-blue-500"
              : "bg-orange-500"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-gray-600 w-10 text-right">{percentage}%</span>
    </div>
  );
};

// Sortable header button
interface SortableHeaderProps {
  column: {
    toggleSorting: (desc?: boolean) => void;
    getIsSorted: () => false | "asc" | "desc";
  };
  children: React.ReactNode;
}

const SortableHeader = ({ column, children }: SortableHeaderProps) => {
  return (
    <button
      className="flex items-center gap-1 hover:text-gray-900 font-medium"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {children}
      <ArrowUpDown className="ml-1 h-3 w-3" />
    </button>
  );
};

export const columns: ColumnDef<ProductionRequest>[] = [
  {
    accessorKey: "requestTitle",
    header: ({ column }) => <SortableHeader column={column}>Request Title</SortableHeader>,
    cell: ({ row }) => (
      <div className="font-medium max-w-xs truncate" title={row.getValue("requestTitle")}>
        {row.getValue("requestTitle")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableHeader column={column}>Status</SortableHeader>,
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => <SortableHeader column={column}>Priority</SortableHeader>,
    cell: ({ row }) => <PriorityBadge priority={row.getValue("priority")} />,
  },
  {
    accessorKey: "requesterName",
    header: ({ column }) => <SortableHeader column={column}>Requester</SortableHeader>,
    cell: ({ row }) => <div className="whitespace-nowrap">{row.getValue("requesterName")}</div>,
  },
  {
    accessorKey: "requesterEmail",
    header: ({ column }) => <SortableHeader column={column}>Email</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-sm text-gray-600">{row.getValue("requesterEmail")}</div>
    ),
  },
  {
    accessorKey: "dateSubmitted",
    header: ({ column }) => <SortableHeader column={column}>Date Submitted</SortableHeader>,
    cell: ({ row }) => {
      const date = row.getValue("dateSubmitted") as string;
      return <div className="whitespace-nowrap">{date || "N/A"}</div>;
    },
  },
  {
    accessorKey: "daysInCurrentStatus",
    header: ({ column }) => <SortableHeader column={column}>Days in Status</SortableHeader>,
    cell: ({ row }) => {
      const value = row.getValue("daysInCurrentStatus");
      // Handle special values from Airtable (e.g., {"specialValue": "NaN"})
      const days = typeof value === 'object' && value !== null && 'specialValue' in value ? 0 : (value as number);
      return (
        <div
          className={cn(
            "text-center font-medium",
            days > 7 ? "text-red-600" : days > 3 ? "text-orange-600" : "text-gray-600"
          )}
        >
          {days || "N/A"}
        </div>
      );
    },
  },
  {
    accessorKey: "taskCompletionPercent",
    header: ({ column }) => <SortableHeader column={column}>Task Progress</SortableHeader>,
    cell: ({ row }) => <ProgressBar value={row.getValue("taskCompletionPercent")} />,
  },
  {
    accessorKey: "numProductionTasks",
    header: ({ column }) => <SortableHeader column={column}>Tasks</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-center">
        {row.getValue("numProductionTasks")}
      </div>
    ),
  },
  {
    accessorKey: "numCompletedTasks",
    header: ({ column }) => <SortableHeader column={column}>Completed</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-center text-green-600 font-medium">
        {row.getValue("numCompletedTasks")}
      </div>
    ),
  },
  {
    accessorKey: "asset",
    header: ({ column }) => <SortableHeader column={column}>Asset Type</SortableHeader>,
    cell: ({ row }) => (
      <span className="px-2 py-1 bg-gray-100 rounded text-xs">
        {row.getValue("asset")}
      </span>
    ),
  },
  {
    accessorKey: "assignedArtistEmails",
    header: ({ column }) => <SortableHeader column={column}>Assigned Artists</SortableHeader>,
    cell: ({ row }) => {
      const emails = row.getValue("assignedArtistEmails") as string[];
      return (
        <div className="text-sm text-gray-600 max-w-xs truncate" title={emails?.join(", ")}>
          {emails?.length > 0 ? emails.join(", ") : "Unassigned"}
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => <SortableHeader column={column}>Description</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-sm text-gray-600 max-w-md truncate" title={row.getValue("description")}>
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "requestSummary",
    header: ({ column }) => <SortableHeader column={column}>AI Summary</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-sm text-gray-600 max-w-xs truncate italic" title={row.getValue("requestSummary")}>
        {row.getValue("requestSummary")}
      </div>
    ),
  },
  {
    accessorKey: "requestCategory",
    header: ({ column }) => <SortableHeader column={column}>AI Category</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("requestCategory")}</div>
    ),
  },
  {
    accessorKey: "slug",
    header: ({ column }) => <SortableHeader column={column}>Slug</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-sm font-mono text-gray-600">{row.getValue("slug")}</div>
    ),
  },
  {
    accessorKey: "storyId",
    header: ({ column }) => <SortableHeader column={column}>Story ID</SortableHeader>,
    cell: ({ row }) => (
      <div className="text-sm font-mono text-gray-600">{row.getValue("storyId")}</div>
    ),
  },
  {
    accessorKey: "referenceImages",
    header: "Reference Images",
    cell: ({ row }) => {
      const images = row.getValue("referenceImages") as { thumbnails?: { small?: { url: string } }; url: string; filename: string }[];
      return (
        <div className="flex gap-1">
          {images?.length > 0 ? (
            images.slice(0, 3).map((img, idx) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={idx}
                src={img.thumbnails?.small?.url || img.url}
                alt={img.filename}
                className="w-8 h-8 rounded object-cover"
                title={img.filename}
              />
            ))
          ) : (
            <span className="text-xs text-gray-400">No images</span>
          )}
        </div>
      );
    },
  },
];
