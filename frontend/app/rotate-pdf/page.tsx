"use client";

import { useState } from "react";
import axios from "axios";

import ToolLayout from "../../components/ToolLayout";
import Card from "../../components/ui/Card";
import FileUpload from "../../components/FileUpload";
import PrimaryButton from "../../components/ui/PrimaryButton";

import { API_BASE_URL } from "../../lib/config";

export default function RotatePDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState(90);
  const [loading, setLoading] = useState(false);

  const handleRotate = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("angle", angle.toString());

      const response = await axios.post(
        `${API_BASE_URL}/api/rotate-pdf`,
        formData,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;
      link.download = "rotated.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to rotate PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Rotate PDF"
      description="Rotate every page in your PDF by 90°, 180° or 270°."
    >
      <Card>
        <div className="space-y-6">
          <FileUpload
    file={file}
    onFileSelect={setFile}
/>

          <div>
            <label className="mb-2 block font-medium">
              Rotation Angle
            </label>

            <select
              value={angle}
              onChange={(e) =>
                setAngle(Number(e.target.value))
              }
              className="w-full rounded-xl border p-3"
            >
              <option value={90}>90° Clockwise</option>
              <option value={180}>180°</option>
              <option value={270}>270° Clockwise</option>
            </select>
          </div>

          <PrimaryButton
            onClick={handleRotate}
            loading={loading}
            disabled={!file}
          >
            Rotate PDF
          </PrimaryButton>
        </div>
      </Card>
    </ToolLayout>
  );
}