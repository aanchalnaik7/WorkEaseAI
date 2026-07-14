import FileUpload from "../../components/FileUpload";
import Card from "../../components/ui/Card";

export default function PdfToWordPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600">
            PDF to Word Converter
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            Convert your PDF documents into editable Word files in seconds.
          </p>
        </div>

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

      </div>

    </main>
  );
}