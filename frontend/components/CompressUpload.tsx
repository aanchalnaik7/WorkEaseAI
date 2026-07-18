"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { API_BASE_URL } from "../lib/config";
import FileUpload from "./FileUpload";
import PrimaryButton from "./ui/PrimaryButton";

export default function CompressUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [compression, setCompression] = useState("balanced");
  const [loading, setLoading] = useState(false);

  const handleCompress = async () => {
    if (!file) {
      toast.error("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("compression", compression);

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/api/compress-pdf`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Compression failed");
      }

      const blob = await response.blob();

      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `compressed-${file.name}`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(downloadUrl);

      toast.success("PDF compressed successfully!");

      setFile(null);
      setCompression("balanced");
    } catch (error) {
      console.error(error);
      toast.error("Unable to compress PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <FileUpload
        file={file}
        onFileSelect={setFile}
      />

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Compression Level
        </label>

        <select
          value={compression}
          onChange={(e) => setCompression(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        >
          <option value="high">High Quality</option>
          <option value="balanced">Balanced (Recommended)</option>
          <option value="maximum">Maximum Compression</option>
        </select>
      </div>

      <PrimaryButton
        loading={loading}
        onClick={handleCompress}
      >
        {loading ? "Compressing PDF..." : "Compress PDF"}
      </PrimaryButton>
    </div>
  );
}