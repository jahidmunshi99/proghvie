import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function CropRow({ item, index, onEdit, onView }) {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-4 py-3">{index + 1}</td>
      <td className="px-4 py-3">{item.f_year}</td>

      <td className="px-4 py-3">
        <Badge color={item.crop_session === "robi" ? "green" : "amber"}>
          {item.crop_session}
        </Badge>
      </td>

      <td className="px-4 py-3">{item.upazilaId}</td>
      <td className="px-4 py-3 font-medium">{item.crop_name}</td>
      <td className="px-4 py-3">{item.target} ha</td>

      <td className="px-4 py-3">
        {item.achievement_total || "—"}
      </td>

      <td className="px-4 py-3">
        <div className="flex justify-center gap-2">
          <Button variant="secondary" onClick={onView}>
            View
          </Button>
          <Button variant="primary" onClick={onEdit}>
            Edit
          </Button>
        </div>
      </td>
    </tr>
  );
}