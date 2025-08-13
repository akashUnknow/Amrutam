// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import BookingPage from "./pages/BookingPage";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/booking-confirmation" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
