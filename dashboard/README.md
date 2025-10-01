# Production Requests Dashboard

A Next.js 14 dashboard for viewing and managing production requests from Airtable. This dashboard provides a comprehensive view of all production requests with advanced table features including sorting, column management, and persistent user preferences.

## Features

### Core Functionality
- **Real-time Data Fetching**: Pulls production requests directly from Airtable API
- **Sortable Columns**: Click any column header to sort (ascending/descending)
- **Column Management**: Show/hide columns based on your needs
- **Persistent Preferences**: Your column visibility and order settings are saved in localStorage
- **Responsive Design**: Works on desktop and tablet devices

### Data Display
All Airtable fields are displayed including:
- Request details (title, description, requester info)
- Status tracking (status badges, priority indicators)
- Progress visualization (task completion percentage bars)
- Time tracking (days in current status)
- Assignments (artists, production tasks)
- Media (reference image thumbnails)
- Metadata (asset type, story ID, slug)
- AI-generated summaries and categories

### UI/UX Features
- Color-coded status badges (Queued, In Review, Assigned, In Production, Completed, Rejected)
- Priority indicators (High/Red, Medium/Yellow, Low/Green)
- Visual progress bars for task completion
- Image thumbnails with hover previews
- Truncated text with tooltips for long content
- Loading states and error handling

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework
- **Tanstack Table** - Powerful table library with sorting and column management
- **Zustand** - State management for user preferences
- **Airtable.js** - Official Airtable JavaScript SDK
- **Lucide React** - Icon library

## Prerequisites

- Node.js 18+ installed
- Airtable account with API access
- Airtable Personal Access Token

## Getting Started

### 1. Environment Setup

The `.env.local` file should already be configured with your Airtable credentials:

```env
# Airtable Configuration
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=appV0xzl937ervf3A

# Table IDs
AIRTABLE_REQUESTS_TABLE_ID=tblli3ounLjB7DAUV
AIRTABLE_PRODUCTION_TASKS_TABLE_ID=tblKeJpjeaX0sqm1F
AIRTABLE_ARTISTS_TABLE_ID=tblZmLjKLxObfK9MR

# Table Names
AIRTABLE_REQUESTS_TABLE_NAME=Requests
AIRTABLE_PRODUCTION_TASKS_TABLE_NAME=Production Tasks
AIRTABLE_ARTISTS_TABLE_NAME=Artists
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
dashboard/
├── app/
│   ├── api/
│   │   └── requests/
│   │       └── route.ts          # Airtable API endpoint
│   └── page.tsx                  # Main dashboard page
├── components/
│   ├── DataTable.tsx             # Main table component
│   └── columns.tsx               # Column definitions and formatters
├── lib/
│   └── utils.ts                  # Utility functions
├── stores/
│   └── tablePreferences.ts       # Zustand store for preferences
├── types/
│   └── airtable.ts               # TypeScript type definitions
└── .env.local                    # Environment variables
```

## Usage

### Sorting
- Click any column header to sort by that column
- Click again to reverse the sort order
- The arrow icon indicates current sort direction

### Column Management
1. Click the "Column Settings" button in the top-right
2. Check/uncheck columns to show/hide them
3. Your preferences are automatically saved
4. Click "Reset to Default" to restore default settings

### Refreshing Data
- Click the "Refresh" button to fetch the latest data from Airtable
- The timestamp shows when data was last fetched

### Column Order
Column order is currently managed through code in `stores/tablePreferences.ts`. Future enhancements could include drag-and-drop reordering.

## API Routes

### GET `/api/requests`
Fetches all production requests from Airtable.

**Query Parameters:**
- `view` (optional) - Airtable view name (default: "Grid view")
- `maxRecords` (optional) - Maximum records to fetch (default: 100)

**Response:**
```json
{
  "success": true,
  "data": [...],
  "count": 25
}
```

## Customization

### Adding New Columns
1. Update the `ProductionRequest` interface in `types/airtable.ts`
2. Update the `transformRecord` function in `app/api/requests/route.ts`
3. Add a new column definition in `components/columns.tsx`

### Changing Default Visibility
Edit the `defaultColumnVisibility` object in `stores/tablePreferences.ts`

### Modifying Styles
All components use Tailwind CSS classes. Update the className attributes to customize appearance.

## Limitations

- **Read-Only**: This dashboard does not write data back to Airtable
- **Pagination**: Currently loads up to 100 records (Airtable API default)
- **Column Reordering**: Requires code changes (drag-and-drop not yet implemented)
- **Filtering**: Not yet implemented
- **Search**: Not yet implemented

## Future Enhancements

- [ ] Drag-and-drop column reordering
- [ ] Advanced filtering and search
- [ ] Export to CSV/Excel
- [ ] Virtual scrolling for large datasets
- [ ] Real-time updates via WebSocket
- [ ] Row expansion for detailed views
- [ ] Bulk selection features
- [ ] Multiple view presets
- [ ] Dark mode support

## Troubleshooting

### "Failed to fetch requests" error
- Verify your Airtable API key is correct in `.env.local`
- Check that the base ID and table names match your Airtable base
- Ensure your Airtable account has API access

### Columns not appearing
- Check the "Column Settings" panel to see if they're hidden
- Click "Reset to Default" to restore default visibility

### Changes not persisting
- Clear your browser's localStorage if preferences seem corrupted
- Check browser console for any errors

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Airtable API Documentation](https://airtable.com/developers/web/api)
- [Tanstack Table Documentation](https://tanstack.com/table/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
