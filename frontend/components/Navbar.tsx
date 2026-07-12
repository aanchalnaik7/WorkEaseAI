export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          WorkEase AI
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-blue-600">
            Tools
          </a>

          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}