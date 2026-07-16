"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "./ui/PrimaryButton";
import Spinner from "./ui/Spinner";
import { API_BASE_URL } from "../lib/config";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function validate(selectedFile: File) {
    if (selectedFile.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      setFile(null);
      toast.error("Please upload a PDF file.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("Maximum file size is 10 MB.");
      setFile(null);
      toast.error("Maximum file size is 10 MB.");
      return;
    }

    setError("");
    setStatus("");
    setFile(selectedFile);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];

    if (selected) {
      validate(selected);
    }
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const selected = event.dataTransfer.files?.[0];

    if (selected) {
      validate(selected);
    }
  }

  function removeFile() {
    setFile(null);
    setError("");
    setStatus("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    toast("File removed.");
  }

  async function handleConvert() {
    if (!file) return;

    setLoading(true);
    setStatus("Uploading PDF...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/pdf-to-word`,
        {
          method: "POST",
          body: formData,
        }
      );

      setStatus("Converting PDF...");

      if (!response.ok) {
        throw new Error("Conversion failed");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(".pdf", ".docx");

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);

      setStatus("Download started ✅");

      toast.success("Word document downloaded successfully!");
    } catch (err) {
      console.error(err);

      setStatus("Conversion failed ❌");

      toast.error("Conversion failed.");
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
          accept=".pdf"
          className="hidden"
          onChange={handleChange}
        />

        <div className="text-5xl">📄</div>

        <h2 className="mt-4 text-2xl font-bold">
          Drag & Drop your PDF
        </h2>

        <p className="text-gray-500 mt-2">
          or click to browse
        </p>
      </div>

      {error && (
        <p className="mt-4 text-red-600 font-medium">
          {error}
        </p>
      )}

      {file && (
        <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4 flex justify-between items-center">
          <div>
            <p className="font-semibold">
              {file.name}
            </p>

            <p className="text-gray-500 text-sm">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          <button
            onClick={removeFile}
            className="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      )}

      {status && (
        <p className="mt-6 text-center font-medium text-blue-600">
          {status}
        </p>
      )}

      <div className="mt-8">
        <PrimaryButton
          disabled={!file || loading}
          onClick={handleConvert}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Spinner />
              <span>Converting...</span>
            </div>
          ) : (
            "Convert to Word"
          )}
        </PrimaryButton>
      </div>
    </div>
  );
}