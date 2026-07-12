"use client";

import { useRef, useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function validate(selectedFile: File) {
    if (selectedFile.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      setFile(null);
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("Maximum file size is 10 MB.");
      setFile(null);
      return;
    }

    setError("");
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

    if (inputRef.current) {
      inputRef.current.value = "";
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

      <button
        disabled={!file}
        className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl disabled:bg-gray-400 hover:bg-blue-700 transition"
      >
        Convert to Word
      </button>

    </div>
  );
}