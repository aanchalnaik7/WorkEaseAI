import Link from "next/link";

export default function PopularTools() {
  return (
    <section className="py-24 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center">
        Popular Tools
      </h2>

      <p className="text-center text-gray-600 mt-4">
        Everything you need to work smarter in one place.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {/* PDF to Word */}
        <Link
          href="/pdf-to-word"
          className="block bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <h3 className="text-2xl font-semibold">📄 PDF to Word</h3>
          <p className="text-gray-600 mt-4">
            Convert PDF files into editable Word documents.
          </p>
        </Link>

        {/* Merge PDF */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold">📄 Merge PDF</h3>
          <p className="text-gray-600 mt-4">
            Combine multiple PDFs into a single document.
          </p>
        </div>

        {/* Remove Background */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold">🖼 Remove Background</h3>
          <p className="text-gray-600 mt-4">
            Remove image backgrounds instantly using AI.
          </p>
        </div>

        {/* JPG to PNG */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold">🖼 JPG to PNG</h3>
          <p className="text-gray-600 mt-4">
            Convert images between popular formats.
          </p>
        </div>

        {/* AI Summarizer */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold">🤖 AI Summarizer</h3>
          <p className="text-gray-600 mt-4">
            Summarize long PDFs and documents in seconds.
          </p>
        </div>

        {/* AI Resume Builder */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold">🤖 AI Resume Builder</h3>
          <p className="text-gray-600 mt-4">
            Create professional resumes with AI assistance.
          </p>
        </div>

      </div>
    </section>
  );
}