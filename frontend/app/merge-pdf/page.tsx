import Card from "../../components/ui/Card";

export default function MergePdfPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600">
            Merge PDF
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            Combine multiple PDF files into one document.
          </p>
        </div>

        <Card>

          <div className="border-2 border-dashed border-blue-300 rounded-2xl p-12 text-center">

            <div className="text-5xl">
              📄
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              Upload Multiple PDFs
            </h2>

            <p className="text-gray-500 mt-2">
              Drag & Drop or Click to Browse
            </p>

          </div>

        </Card>

      </div>
    </main>
  );
}