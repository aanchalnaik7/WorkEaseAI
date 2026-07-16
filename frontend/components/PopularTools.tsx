import ToolCard from "./ToolCard";
import { tools } from "../data/tools";

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
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            tool={tool}
          />
        ))}
      </div>
    </section>
  );
}