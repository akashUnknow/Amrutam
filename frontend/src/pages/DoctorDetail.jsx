import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SlotGrid from "@/components/SlotGrid";
import api from "@/utils/api";

export default function DoctorDetail() {
  const { id } = useParams();
  const { data: doctor } = useQuery({
    queryKey: ["doctor", id],
    queryFn: () => api.get(`/doctors/${id}`).then(res => res.data)
  });
  const { data: slots } = useQuery({
    queryKey: ["slots", id],
    queryFn: () => api.get(`/doctors/${id}/slots`).then(res => res.data)
  });

  if (!doctor) return null;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">{doctor.display_name}</h1>
      <p>{doctor.bio}</p>
      <h2 className="mt-4 font-semibold">Available Slots</h2>
      <SlotGrid slots={slots || []} onSelect={(slot) => console.log("Selected slot", slot)} />
    </div>
  );
}
