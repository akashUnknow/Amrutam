import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DoctorCard from "@/components/DoctorCard";
import api from "@/utils/api";

export default function DoctorList() {
  const [params] = useSearchParams();
  const specialty = params.get("specialty");
  const mode = params.get("mode");

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors", specialty, mode],
    queryFn: () => api.get(`/doctors?specialty=${specialty}&mode=${mode}`).then(res => res.data)
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4 grid gap-4 md:grid-cols-2">
      {doctors.map(doc => <DoctorCard key={doc.id} doctor={doc} />)}
    </div>
  );
}
