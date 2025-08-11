import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [specialty, setSpecialty] = useState("");
  const [mode, setMode] = useState("");
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Find Ayurvedic Doctors</h1>
      <Select onValueChange={setSpecialty}>
        <SelectTrigger>
          <SelectValue placeholder="Select Specialization" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="skin">Skin Care</SelectItem>
          <SelectItem value="digestive">Digestive Health</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={setMode} className="mt-2">
        <SelectTrigger>
          <SelectValue placeholder="Select Mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="online">Online</SelectItem>
          <SelectItem value="in_person">In Person</SelectItem>
        </SelectContent>
      </Select>
      <Button
        className="mt-4 w-full"
        onClick={() => navigate(`/doctors?specialty=${specialty}&mode=${mode}`)}
      >
        Search
      </Button>
    </div>
  );
}
