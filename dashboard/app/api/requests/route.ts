import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';
import { ProductionRequest } from '@/types/airtable';

// Initialize Airtable - lazy initialization to avoid build-time errors
function getBase() {
  const apiKey = process.env.AIRTABLE_API_KEY;

  // Configure Airtable with proper authentication
  // For Personal Access Tokens (starting with 'pat'), use as-is
  const airtable = new Airtable({
    apiKey: apiKey,
  });

  return airtable.base(process.env.AIRTABLE_BASE_ID!);
}

// Helper to handle Airtable special values (e.g., {"specialValue": "NaN"})
function getNumericValue(value: unknown): number {
  if (typeof value === 'number') return value;
  if (typeof value === 'object' && value !== null && 'specialValue' in value) return 0;
  return 0;
}

// Transform Airtable record to ProductionRequest
function transformRecord(record: Airtable.Record<Airtable.FieldSet>): ProductionRequest {
  const fields = record.fields;

  return {
    id: record.id,
    requestTitle: (fields['Request Title'] as string) || '',
    description: (fields['Description'] as string) || '',
    requesterName: (fields['Requester Name'] as string) || '',
    requesterEmail: (fields['Requester Email'] as string) || '',
    priority: (fields['Priority'] as 'High' | 'Medium' | 'Low') || 'Medium',
    status: (fields['Status'] as 'Queued' | 'In Review' | 'Assigned' | 'In Production' | 'Completed' | 'Rejected') || 'Queued',
    dateSubmitted: (fields['Date Submitted'] as string) || '',
    referenceImages: (fields['Reference Images'] as Airtable.Attachment[]) || [],
    assignedArtistIds: (fields['Assigned Artist'] as string[]) || [],
    productionTaskIds: (fields['Production Tasks'] as string[]) || [],
    daysInCurrentStatus: getNumericValue(fields['Days in Current Status']),
    numProductionTasks: getNumericValue(fields['# Production Tasks']),
    numCompletedTasks: getNumericValue(fields['# Completed Tasks']),
    taskCompletionPercent: getNumericValue(fields['Task Completion %']),
    assignedArtistEmails: (fields['Assigned Artist Email'] as string[]) || [],
    requestSummary: ((fields['Request Summary (AI)'] as { value?: string })?.value) || '',
    requestCategory: ((fields['Request Category (AI)'] as { value?: string })?.value) || '',
    slug: (fields['Slug'] as string) || '',
    storyId: (fields['StoryID'] as string) || '',
    asset: (fields['Asset'] as 'Video' | 'Graphic' | 'Story' | 'Script' | 'Image' | 'Gallery' | 'Live Shot') || 'Story',
    createdTime: (record as { createdTime?: string }).createdTime || '',
  };
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const view = searchParams.get('view') || 'Grid view';
    const maxRecords = parseInt(searchParams.get('maxRecords') || '100');

    const records: ProductionRequest[] = [];

    // Fetch records from Airtable
    await getBase()(process.env.AIRTABLE_REQUESTS_TABLE_NAME || 'Requests')
      .select({
        maxRecords,
        view,
      })
      .eachPage((pageRecords, fetchNextPage) => {
        pageRecords.forEach((record) => {
          records.push(transformRecord(record));
        });
        fetchNextPage();
      });

    return NextResponse.json({
      success: true,
      data: records,
      count: records.length,
    });
  } catch (error) {
    console.error('Airtable API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch requests',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { slug, storyId, requestTitle, priority } = body;

    if (!slug || !storyId || !requestTitle || !priority) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: slug, storyId, requestTitle, priority',
        },
        { status: 400 }
      );
    }

    // Validate priority value
    if (!['High', 'Medium', 'Low'].includes(priority)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid priority value. Must be High, Medium, or Low',
        },
        { status: 400 }
      );
    }

    // Create record in Airtable
    const createdRecords = await getBase()(process.env.AIRTABLE_REQUESTS_TABLE_NAME || 'Requests').create([
      {
        fields: {
          'Slug': slug,
          'StoryID': storyId,
          'Request Title': requestTitle,
          'Priority': priority,
          'Status': 'Queued',
          'Date Submitted': new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
        },
      },
    ]);

    const createdRecord = createdRecords[0];
    const transformedRecord = transformRecord(createdRecord);

    return NextResponse.json({
      success: true,
      data: transformedRecord,
      message: 'Request created successfully',
    });
  } catch (error) {
    console.error('Airtable API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create request',
      },
      { status: 500 }
    );
  }
}
