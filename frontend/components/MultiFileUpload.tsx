"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "./ui/PrimaryButton";
import Spinner from "./ui/Spinner";
import { API_BASE_URL } from "../lib/config";

export default function MultiFileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function validate(selectedFiles: File[]) {
    const pdfs = selectedFiles.filter(
      (file) => file.type === "application/pdf"
    );

    if (pdfs.length !== selectedFiles.length) {
      setError("Only PDF files are allowed.");
      toast.error("Only PDF files are allowed.");
    } else {
      setError("");
    }

    setStatus("");
    setFiles(pdfs);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files;

    if (!selected) return;

    validate(Array.from(selected));
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    validate(Array.from(event.dataTransfer.files));
  }

  function removeFile(index: number) {
    const updatedFiles = files.filter((_, i) => i !== index);

    setFiles(updatedFiles);

    if (updatedFiles.length === 0 && inputRef.current) {
      inputRef.current.value = "";
    }

    toast("File removed.");
  }

  async function handleMerge() {
    if (files.length < 2) {
      toast.error("Please select at least two PDF files.");
      return;
    }

    setLoading(true);
    setStatus("Uploading PDFs...");

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/merge-pdf`,
        {
          method: "POST",
          body: formData,
        }
      );

      setStatus("Merging PDFs...");

      if (!response.ok) {
        throw new Error("Merge failed");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);

      setStatus("Download started ✅");

      toast.success("PDFs merged successfully!");
    } catch (error) {
      console.error(error);

      setStatus("Merge failed ❌");

      toast.error("Merge failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-blue-300 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-600 transition"
      >

        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf"
          className="hidden"
          onChange={handleChange}
        />

        <div className="text-6xl">
          📄
        </div>

        <h2 className="mt-4 text-2xl font-bold">
          Drag & Drop PDFs
        </h2>

        <p className="mt-2 text-gray-500">
          or click to browse
        </p>

      </div>

      {error && (
        <p className="mt-4 text-red-600 font-medium">
          {error}
        </p>
      )}

      {files.length > 0 && (

        <div className="mt-8">

          <h3 className="text-xl font-bold mb-4">
            Selected Files ({files.length})
          </h3>

          <div className="space-y-3">

            {files.map((file, index) => (

              <div
                key={`${file.name}-${index}`}
                className="bg-white border rounded-xl p-4 flex justify-between items-center shadow-sm"
              >

                <div>

                  <p className="font-semibold">
                    📄 {file.name}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                </div>

                <button
                  onClick={() => removeFile(index)}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        </div>

      )}

      {status && (
        <p className="mt-6 text-center font-medium text-blue-600">
          {status}
        </p>
      )}

      <div className="mt-8">

        <PrimaryButton
          disabled={files.length < 2 || loading}
          onClick={handleMerge}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Spinner />
              <span>Merging...</span>
            </div>
          ) : (
            "Merge PDFs"
          )}
        </PrimaryButton>

      </div>

    </div>
  );
}