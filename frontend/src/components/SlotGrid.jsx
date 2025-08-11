import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function SlotGrid({ slots, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {slots.map(slot => (
        <Button
          key={slot.id}
          variant={slot.status === "available" ? "default" : "secondary"}
          disabled={slot.status !== "available"}
          onClick={() => onSelect(slot)}
        >
          {format(new Date(slot.start_at), "hh:mm a")}
        </Button>
      ))}
    </div>
  );
}
