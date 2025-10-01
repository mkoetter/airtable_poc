"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { RequestForm } from "./RequestForm";
import { CreateRequestInput } from "@/types/airtable";
import { cn } from "@/lib/utils";

interface RequestFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateRequestInput) => Promise<void>;
  isSubmitting: boolean;
}

export function RequestFormModal({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
}: RequestFormModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  // Handle click outside to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity"
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          "bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 transform transition-all",
          "animate-in fade-in zoom-in-95 duration-200"
        )}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Create New Production Request
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Fill in the required fields to create a new request
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-4">
          <RequestForm
            onSubmit={onSubmit}
            onCancel={onClose}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}
