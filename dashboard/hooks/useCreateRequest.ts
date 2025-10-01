import { useState } from "react";
import { CreateRequestInput, CreateRequestResponse } from "@/types/airtable";

export function useCreateRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRequest = async (data: CreateRequestInput): Promise<CreateRequestResponse> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: CreateRequestResponse = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to create request");
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    createRequest,
    isSubmitting,
    error,
  };
}
