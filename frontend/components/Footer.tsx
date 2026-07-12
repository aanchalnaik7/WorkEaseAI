export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-400">
          WorkEase AI
        </h2>

        <p className="mt-4 text-gray-300">
          Your AI-powered workspace for documents, images, and productivity.
        </p>

        <div className="flex justify-center gap-8 mt-8">
          <a href="#" className="hover:text-blue-400 transition">
            Tools
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Pricing
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2026 WorkEase AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}