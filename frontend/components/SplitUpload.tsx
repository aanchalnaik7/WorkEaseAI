"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "./ui/PrimaryButton";
import Spinner from "./ui/Spinner";
import { API_BASE_URL } from "../lib/config";

interface ReadPdfResponse {
  success: boolean;
  filename: string;
  totalPages: number;
}

export default function SplitUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [splitting, setSplitting] = useState(false);
  const [error, setError] = useState("");

  const [pageCount, setPageCount] = useState<number | null>(null);
  const [fromPage, setFromPage] = useState(1);
  const [toPage, setToPage] = useState(1);

  function validate(selectedFile: File) {
    if (selectedFile.type !== "application/pdf") {
      setError("Please upload a PDF.");
      toast.error("Please upload a PDF.");
      return;
    }

    setError("");
    setFile(selectedFile);
    setPageCount(null);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];

    if (selected) {
      validate(selected);
    }
  }

  async function handleReadPdf() {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${API_BASE_URL}/api/pdf-info`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error();
      }

      const data: ReadPdfResponse = await response.json();

      setPageCount(data.totalPages);
      setFromPage(1);
      setToPage(data.totalPages);

      toast.success("PDF loaded successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Unable to read PDF.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSplitPdf() {
    if (!file || pageCount === null) return;

    if (
      fromPage < 1 ||
      toPage > pageCount ||
      fromPage > toPage
    ) {
      toast.error("Invalid page range.");
      return;
    }

    setSplitting(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fromPage", fromPage.toString());
    formData.append("toPage", toPage.toString());

    try {
      const response = await fetch(`${API_BASE_URL}/api/split-pdf`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error();
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "split.pdf";
      a.click();

      window.URL.revokeObjectURL(url);

      toast.success("Split PDF downloaded!");
    } catch (err) {
      console.error(err);
      toast.error("Unable to split PDF.");
    } finally {
      setSplitting(false);
    }
  }

  return (
    <div>
      <div
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

        <div className="text-6xl">✂️</div>

        <h2 className="text-2xl font-bold mt-4">Upload PDF</h2>

        <p className="text-gray-500 mt-2">Click to browse</p>
      </div>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {file && (
        <div className="mt-6 border rounded-xl p-4 bg-blue-50">
          <p className="font-semibold">{file.name}</p>
          <p className="text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}

      {!pageCount && (
        <div className="mt-8">
          <PrimaryButton
            disabled={!file || loading}
            onClick={handleReadPdf}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner />
                <span>Reading PDF...</span>
              </div>
            ) : (
              "Read PDF"
            )}
          </PrimaryButton>
        </div>
      )}

      {pageCount !== null && (
        <div className="mt-10 border rounded-2xl p-8 bg-green-50">
          <h2 className="text-3xl font-bold">PDF Information</h2>

          <p className="mt-4">
            Total Pages:
            <span className="font-bold text-blue-600 ml-2">
              {pageCount}
            </span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <label className="font-semibold">From Page</label>

              <input
                type="number"
                min={1}
                max={pageCount}
                value={fromPage}
                onChange={(e) => setFromPage(Number(e.target.value))}
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">To Page</label>

              <input
                type="number"
                min={1}
                max={pageCount}
                value={toPage}
                onChange={(e) => setToPage(Number(e.target.value))}
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>
          </div>

          <div className="mt-8">
            <PrimaryButton
              onClick={handleSplitPdf}
              disabled={splitting}
            >
              {splitting ? (
                <div className="flex items-center justify-center gap-2">
                  <Spinner />
                  <span>Splitting PDF...</span>
                </div>
              ) : (
                "Split PDF"
              )}
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}