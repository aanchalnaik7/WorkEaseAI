"use client";

import { ChangeEvent, DragEvent, useState } from "react";
import toast from "react-hot-toast";

interface FileUploadProps {
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

export default function FileUpload({
  file,
  onFileSelect,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const validateFile = (selectedFile: File | null) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }

    onFileSelect(selectedFile);
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0] || null;
    validateFile(selectedFile);
  };

  const handleDrop = (
    event: DragEvent<HTMLLabelElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);

    const selectedFile = event.dataTransfer.files?.[0] || null;

    validateFile(selectedFile);
  };

  const handleDragOver = (
    event: DragEvent<HTMLLabelElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(true);
  };

  const handleDragLeave = (
    event: DragEvent<HTMLLabelElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);
  };

  const removeFile = () => {
    onFileSelect(null);
  };

  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;

    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="space-y-5">
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          group
          flex
          flex-col
          items-center
          justify-center
          w-full
          min-h-65
          rounded-3xl
          border-2
          border-dashed
          cursor-pointer
          transition-all
          duration-300

          ${
            dragActive
              ? "border-blue-600 bg-blue-100 scale-[1.02]"
              : "border-blue-300 bg-blue-50/40 hover:border-blue-600 hover:bg-blue-50"
          }
        `}
      >
        <div
          className="
            text-6xl
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >
          {dragActive ? "📥" : "📄"}
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-800">
          {dragActive
            ? "Drop your PDF here"
            : "Drag & Drop your PDF here"}
        </h3>

        <p className="mt-2 text-gray-500">
          or click anywhere to browse
        </p>

        <p className="mt-5 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
          Choose PDF
        </p>

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {file && (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="text-4xl">📄</div>

              <div>
                <h4 className="break-all font-semibold">
                  {file.name}
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  {formatFileSize(file.size)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={removeFile}
              className="
                rounded-lg
                bg-red-500
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-red-600
              "
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}