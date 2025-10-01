"use client";

import { useState } from "react";
import { CreateRequestInput, PriorityType } from "@/types/airtable";
import { cn } from "@/lib/utils";

interface RequestFormProps {
  onSubmit: (data: CreateRequestInput) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export function RequestForm({ onSubmit, onCancel, isSubmitting }: RequestFormProps) {
  const [formData, setFormData] = useState<CreateRequestInput>({
    slug: "",
    storyId: "",
    requestTitle: "",
    priority: "Medium",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CreateRequestInput, string>>>({});

  const validateField = (name: keyof CreateRequestInput, value: string): string | undefined => {
    switch (name) {
      case "slug":
        if (!value.trim()) return "Slug is required";
        if (!/^[a-z0-9-]+$/.test(value)) return "Slug must be lowercase with hyphens only";
        break;
      case "storyId":
        if (!value.trim()) return "Story ID is required";
        if (!/^[A-Z0-9-]+$/i.test(value)) return "Story ID must be alphanumeric with hyphens";
        break;
      case "requestTitle":
        if (!value.trim()) return "Request Title is required";
        if (value.length > 200) return "Request Title must be less than 200 characters";
        break;
      case "priority":
        if (!value) return "Priority is required";
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name as keyof CreateRequestInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof CreateRequestInput, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Partial<Record<keyof CreateRequestInput, string>> = {};
    (Object.keys(formData) as Array<keyof CreateRequestInput>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Slug Field */}
      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
          Slug <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="e.g., election-2025-coverage"
          className={cn(
            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
            errors.slug ? "border-red-500" : "border-gray-300",
            isSubmitting && "bg-gray-100 cursor-not-allowed"
          )}
        />
        {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug}</p>}
        <p className="mt-1 text-xs text-gray-500">Lowercase letters, numbers, and hyphens only</p>
      </div>

      {/* Story ID Field */}
      <div>
        <label htmlFor="storyId" className="block text-sm font-medium text-gray-700 mb-2">
          Story ID <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="storyId"
          name="storyId"
          value={formData.storyId}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="e.g., STORY-001"
          className={cn(
            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
            errors.storyId ? "border-red-500" : "border-gray-300",
            isSubmitting && "bg-gray-100 cursor-not-allowed"
          )}
        />
        {errors.storyId && <p className="mt-1 text-sm text-red-600">{errors.storyId}</p>}
        <p className="mt-1 text-xs text-gray-500">Alphanumeric with hyphens</p>
      </div>

      {/* Request Title Field */}
      <div>
        <label htmlFor="requestTitle" className="block text-sm font-medium text-gray-700 mb-2">
          Request Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="requestTitle"
          name="requestTitle"
          value={formData.requestTitle}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          placeholder="e.g., October Election Coverage Graphics"
          className={cn(
            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
            errors.requestTitle ? "border-red-500" : "border-gray-300",
            isSubmitting && "bg-gray-100 cursor-not-allowed"
          )}
        />
        {errors.requestTitle && <p className="mt-1 text-sm text-red-600">{errors.requestTitle}</p>}
        <p className="mt-1 text-xs text-gray-500">Maximum 200 characters</p>
      </div>

      {/* Priority Field */}
      <div>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
          Priority <span className="text-red-500">*</span>
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          className={cn(
            "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
            errors.priority ? "border-red-500" : "border-gray-300",
            isSubmitting && "bg-gray-100 cursor-not-allowed"
          )}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priority && <p className="mt-1 text-sm text-red-600">{errors.priority}</p>}
      </div>

      {/* Form Actions */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Creating...
            </>
          ) : (
            "Create Request"
          )}
        </button>
      </div>
    </form>
  );
}
