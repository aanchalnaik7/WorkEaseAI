import Spinner from "./Spinner";

interface PrimaryButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () =>void;
  type?: "button" | "submit";
}

export default function PrimaryButton({
  children,
  disabled = false,
  loading = false,
  onClick,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
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
        flex
        items-center
        justify-center
        gap-2
      "
    >
      {loading && <Spinner />}

      {children}
    </button>
  );
}