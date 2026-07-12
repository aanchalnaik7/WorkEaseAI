export default function Categories() {
  const categories = [
    {
      icon: "📄",
      title: "PDF Tools",
      description: "Convert, merge, split and compress PDF files.",
    },
    {
      icon: "🤖",
      title: "AI Tools",
      description: "Summarize, write, translate and generate content.",
    },
    {
      icon: "🖼",
      title: "Image Tools",
      description: "Remove backgrounds, resize and convert images.",
    },
    {
      icon: "📊",
      title: "Office Tools",
      description: "Boost productivity with Word, Excel and PowerPoint.",
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Browse by Category
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Choose the type of tool you need.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {category.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {category.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}