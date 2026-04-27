type Props = {
  value: string;
  variant?: "primary" | "secondary";
};

export default function NumberBadge({ value, variant = "primary" }: Props) {
  return (
    <div
      className={`px-4 py-2 rounded-xl text-xl font-bold text-center min-w-[60px]
      ${
        variant === "primary"
          ? "bg-yellow-300 text-black"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      {value}
    </div>
  );
}