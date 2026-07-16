import Link from "next/link";
import { Tool } from "../data/tools";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const card = (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full">
      <h3 className="text-2xl font-semibold">
        {tool.icon} {tool.title}
      </h3>

      <p className="text-gray-600 mt-4">
        {tool.description}
      </p>
    </div>
  );

  if (tool.href) {
    return (
      <Link href={tool.href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}