interface PrimaryButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  disabled = false,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        py-4
        rounded-xl
        bg-blue-600
        text-white
        font-semibold
        transition
        hover:bg-blue-700
        disabled:bg-gray-400
        disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
}