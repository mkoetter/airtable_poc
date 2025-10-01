"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/columns";
import { ProductionRequest, CreateRequestInput } from "@/types/airtable";
import { RefreshCw, Plus } from "lucide-react";
import { RequestFormModal } from "@/components/RequestFormModal";
import { useCreateRequest } from "@/hooks/useCreateRequest";
import toast, { Toaster } from "react-hot-toast";
import { PasswordProtection } from "@/components/PasswordProtection";

export default function Home() {
  const [data, setData] = useState<ProductionRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { createRequest, isSubmitting } = useCreateRequest();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/requests");
      const result = await response.json();

      if (result.success) {
        setData(result.data);
        setLastFetch(new Date());
      } else {
        setError(result.error || "Failed to fetch data");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateRequest = async (formData: CreateRequestInput) => {
    try {
      await createRequest(formData);
      toast.success("Request created successfully!");
      setIsModalOpen(false);
      // Refresh the table data
      await fetchData();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create request");
    }
  };

  return (
    <PasswordProtection>
      <main className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        <div className="container mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Production Requests Dashboard
                </h1>
                <p className="mt-2 text-gray-600">
                  View and manage your production requests from Airtable
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  New Request
                </button>
                <button
                  onClick={fetchData}
                  disabled={loading}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                  Refresh
                </button>
              </div>
            </div>
            {lastFetch && (
              <p className="mt-2 text-sm text-gray-500">
                Last updated: {lastFetch.toLocaleString()}
              </p>
            )}
          </div>

          {/* Content */}
          {loading && !data.length ? (
            <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Loading production requests...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-red-800 font-medium mb-2">Error Loading Data</h3>
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchData}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}

          {/* Request Form Modal */}
          <RequestFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleCreateRequest}
            isSubmitting={isSubmitting}
          />
        </div>
      </main>
    </PasswordProtection>
  );
}
