export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24">

      {/* Announcement Badge */}
      <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
        🚀 AI Powered Productivity Platform
      </div>

      {/* Heading */}
      <h1 className="text-6xl font-extrabold mt-8 leading-tight">
        Every time I need to
        <br />
        get work done,
        <br />
        <span className="text-blue-600">
          I open WorkEase AI.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-3xl text-xl text-gray-600">
        Convert PDFs, edit images, summarize documents,
        generate emails, create resumes, and complete
        everyday work using powerful AI tools.
      </p>

      {/* Search */}
      <div className="mt-10 w-full max-w-2xl">
        <input
          type="text"
          placeholder="🔍 Search tools... (Coming Soon)"
          className="w-full border rounded-xl px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
          Get Started Free
        </button>

        <button className="border px-8 py-4 rounded-xl hover:bg-gray-100 transition">
          Explore Tools
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-12 mt-16 text-center">

        <div>
          <h2 className="text-4xl font-bold text-blue-600">20+</h2>
          <p className="text-gray-600">Upcoming Tools</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">AI</h2>
          <p className="text-gray-600">Powered</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
          <p className="text-gray-600">Available</p>
        </div>

      </div>

    </section>
  );
}