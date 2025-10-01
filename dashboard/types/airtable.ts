// Airtable field types based on API documentation

export interface AirtableAttachment {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  width?: number;
  height?: number;
  thumbnails?: {
    small?: { url: string; width: number; height: number };
    large?: { url: string; width: number; height: number };
    full?: { url: string; width: number; height: number };
  };
}

export interface AirtableAIField {
  state: "generated" | "pending" | "error";
  value: string;
  isStale?: boolean;
}

export type PriorityType = "High" | "Medium" | "Low";
export type StatusType = "Queued" | "In Review" | "Assigned" | "In Production" | "Completed" | "Rejected";
export type AssetType = "Video" | "Graphic" | "Story" | "Script" | "Image" | "Gallery" | "Live Shot";

// Airtable Requests table record
export interface AirtableRequest {
  id: string;
  createdTime?: string;
  fields: {
    "Request Title"?: string;
    "Description"?: string;
    "Requester Name"?: string;
    "Requester Email"?: string;
    "Priority"?: PriorityType;
    "Status"?: StatusType;
    "Date Submitted"?: string; // ISO 8601 date
    "Reference Images"?: AirtableAttachment[];
    "Assigned Artist"?: string[]; // Array of record IDs
    "Production Tasks"?: string[]; // Array of record IDs
    "Days in Current Status"?: number;
    "# Production Tasks"?: number;
    "# Completed Tasks"?: number;
    "Task Completion %"?: number;
    "Assigned Artist Email"?: string[];
    "Request Summary (AI)"?: AirtableAIField;
    "Request Category (AI)"?: AirtableAIField;
    "Slug"?: string;
    "StoryID"?: string;
    "Asset"?: AssetType;
  };
}

// Simplified interface for display in the table
export interface ProductionRequest {
  id: string;
  requestTitle: string;
  description: string;
  requesterName: string;
  requesterEmail: string;
  priority: PriorityType;
  status: StatusType;
  dateSubmitted: string;
  referenceImages: AirtableAttachment[];
  assignedArtistIds: string[];
  productionTaskIds: string[];
  daysInCurrentStatus: number;
  numProductionTasks: number;
  numCompletedTasks: number;
  taskCompletionPercent: number;
  assignedArtistEmails: string[];
  requestSummary: string;
  requestCategory: string;
  slug: string;
  storyId: string;
  asset: AssetType;
  createdTime: string;
}

// API Response type
export interface RequestsResponse {
  records: AirtableRequest[];
  offset?: string;
}

// Create Request Input
export interface CreateRequestInput {
  slug: string;
  storyId: string;
  requestTitle: string;
  priority: PriorityType;
}

// Create Request Response
export interface CreateRequestResponse {
  success: boolean;
  data?: ProductionRequest;
  error?: string;
  message?: string;
}
