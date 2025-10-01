import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { VisibilityState, ColumnOrderState, Updater } from '@tanstack/react-table';

interface TablePreferencesState {
  columnVisibility: VisibilityState;
  columnOrder: ColumnOrderState;
  setColumnVisibility: (updater: Updater<VisibilityState>) => void;
  setColumnOrder: (updater: Updater<ColumnOrderState>) => void;
  resetPreferences: () => void;
}

const defaultColumnVisibility: VisibilityState = {
  // Hide some columns by default
  slug: false,
  storyId: false,
  requestCategory: false,
  description: false,
};

const defaultColumnOrder: ColumnOrderState = [
  "requestTitle",
  "status",
  "priority",
  "requesterName",
  "dateSubmitted",
  "taskCompletionPercent",
  "daysInCurrentStatus",
  "numProductionTasks",
  "numCompletedTasks",
  "assignedArtistEmails",
  "asset",
  "requesterEmail",
  "requestSummary",
  "referenceImages",
  "requestCategory",
  "description",
  "slug",
  "storyId",
];

export const useTablePreferences = create<TablePreferencesState>()(
  persist(
    (set, get) => ({
      columnVisibility: defaultColumnVisibility,
      columnOrder: defaultColumnOrder,
      setColumnVisibility: (updater) => set((state) => ({
        columnVisibility: typeof updater === 'function' ? updater(state.columnVisibility) : updater
      })),
      setColumnOrder: (updater) => set((state) => ({
        columnOrder: typeof updater === 'function' ? updater(state.columnOrder) : updater
      })),
      resetPreferences: () =>
        set({
          columnVisibility: defaultColumnVisibility,
          columnOrder: defaultColumnOrder,
        }),
    }),
    {
      name: 'table-preferences-storage',
    }
  )
);
