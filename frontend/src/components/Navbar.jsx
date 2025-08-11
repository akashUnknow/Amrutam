import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <Link to="/" className="text-lg font-bold">Amrutam</Link>
      <div className="flex gap-4">
        <Link to="/dashboard"><Button variant="outline">Dashboard</Button></Link>
        <Link to="/login"><Button>Login</Button></Link>
      </div>
    </nav>
  );
}
