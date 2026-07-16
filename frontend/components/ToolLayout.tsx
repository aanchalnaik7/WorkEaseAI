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
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-blue-600">
            {title}
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            {description}
          </p>

        </div>

        {children}

      </div>

    </main>
  );
}