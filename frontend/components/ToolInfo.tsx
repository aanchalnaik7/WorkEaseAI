export default function ToolInfo() {
  const items = [
    {
      icon: "🔒",
      title: "100% Secure",
      description: "Your files are processed securely and deleted automatically.",
    },
    {
      icon: "⚡",
      title: "Fast Processing",
      description: "Compress and convert PDFs within seconds.",
    },
    {
      icon: "🆓",
      title: "Free to Use",
      description: "No registration or subscription required.",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition
            hover:shadow-md
          "
        >
          <div className="text-4xl">
            {item.icon}
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-800">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-gray-500 leading-6">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}