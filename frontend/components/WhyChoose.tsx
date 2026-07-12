export default function WhyChoose() {
  const features = [
    {
      icon: "⚡",
      title: "Fast",
      description: "Complete tasks in seconds with optimized tools.",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Your files stay private and are automatically deleted.",
    },
    {
      icon: "🤖",
      title: "AI Powered",
      description: "Smart AI helps you work faster and better.",
    },
    {
      icon: "💎",
      title: "Easy to Use",
      description: "Simple interface designed for everyone.",
    },
  ];

  return (
    <section className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Why Choose WorkEase AI?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Everything you need to work smarter, faster and easier.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}