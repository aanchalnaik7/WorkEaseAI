interface RecentFile {
  name: string;
  size: string;
}

interface RecentFilesProps {
  files: RecentFile[];
}

export default function RecentFiles({
  files,
}: RecentFilesProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">
        Recent Files
      </h2>

      <div className="space-y-3">
        {files.map((file, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                📄 {file.name}
              </p>

              <p className="text-gray-500 text-sm">
                {file.size}
              </p>
            </div>

            <span className="text-green-600 font-medium">
              Ready
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}