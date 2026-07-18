import ToolInfo from "./ToolInfo";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolLayout({
  title,
  description,
  children,
}: ToolLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {description}
          </p>
        </div>

        {/* Upload Section */}
        <div className="mx-auto mt-10 max-w-3xl">
          {children}
        </div>

        {/* Information Cards */}
        <div className="mt-14">
          <ToolInfo />
        </div>
      </div>
    </main>
  );
}