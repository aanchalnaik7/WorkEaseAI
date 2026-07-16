import Card from "../../components/ui/Card";
import ToolLayout from "../../components/ToolLayout";
import FileUpload from "../../components/FileUpload";

export default function PdfToWordPage() {
  return (
    <ToolLayout
      title="PDF to Word Converter"
      description="Convert your PDF documents into editable Word files in seconds."
    >
      <Card>
        <FileUpload />
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mt-12">

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-bold text-lg">⚡ Fast</h3>
          <p className="text-gray-600 mt-2">
            Convert documents within seconds.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-bold text-lg">🔒 Secure</h3>
          <p className="text-gray-600 mt-2">
            Your uploaded files remain private.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-bold text-lg">📄 High Quality</h3>
          <p className="text-gray-600 mt-2">
            Preserve formatting as much as possible.
          </p>
        </div>

      </div>
    </ToolLayout>
  );
}