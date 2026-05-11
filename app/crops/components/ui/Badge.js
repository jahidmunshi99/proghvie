export default function Badge({ children, color = "gray" }) {
  const colors = {
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span className={`px-2 py-0.5 text-xs rounded ${colors[color]}`}>
      {children}
    </span>
  );
}