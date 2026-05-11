export default function ProgressBar({ value, target }) {
  const percent = target
    ? Math.min(Math.round((value / target) * 100), 100)
    : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-gray-500">
        <span>Progress</span>
        <span className="font-medium text-emerald-600">
          {percent}%
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}