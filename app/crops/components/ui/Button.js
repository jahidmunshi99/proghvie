export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition border";

  const variants = {
    primary:
      "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
    secondary:
      "bg-white text-gray-700 border-gray-300 hover:bg-gray-100",
    danger:
      "bg-red-600 text-white border-red-600 hover:bg-red-700",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}