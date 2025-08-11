import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">{doctor.display_name}</h3>
        <p className="text-sm text-gray-500">{doctor.specialties.join(", ")}</p>
      </CardHeader>
      <CardContent>
        <p>{doctor.bio}</p>
        <p className="mt-2"><strong>Mode:</strong> {doctor.mode_availability.join(", ")}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/doctors/${doctor.id}`}>
          <Button>View Slots</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
