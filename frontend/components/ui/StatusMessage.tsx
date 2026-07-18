interface StatusMessageProps {
  type: "success" | "error" | "info";
  message: string;
}

export default function StatusMessage({
  type,
  message,
}: StatusMessageProps) {
  const styles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-300",
      text: "text-green-700",
      icon: "✅",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-300",
      text: "text-red-700",
      icon: "❌",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-300",
      text: "text-blue-700",
      icon: "ℹ️",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`
        flex
        items-center
        gap-3
        rounded-xl
        border
        p-4
        ${style.bg}
        ${style.border}
      `}
    >
      <span className="text-xl">{style.icon}</span>

      <p className={`font-medium ${style.text}`}>
        {message}
      </p>
    </div>
  );
}