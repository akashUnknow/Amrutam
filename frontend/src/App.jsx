// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Pages
import Home from "@/pages/Home";
import DoctorList from "@/pages/DoctorList";
import DoctorDetail from "@/pages/DoctorDetail";
import BookingFlow from "@/pages/BookingFlow";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<DoctorList />} />
              <Route path="/doctors/:id" element={<DoctorDetail />} />
              <Route path="/booking" element={<BookingFlow />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
