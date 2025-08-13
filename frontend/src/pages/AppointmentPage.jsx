// src/pages/AppointmentPage.jsx
import React from "react";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Appointment Details */}
      <div className="flex flex-wrap gap-6">
        {/* Left Section */}
        <div className="flex-1 border rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Appointment Details</h2>
          <div className="flex items-center gap-4">
            {/* Doctor Image */}
            <img
              src="https://via.placeholder.com/80"
              alt="Doctor"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">Dr. Vasanthasree Nair</h3>
              <p className="text-gray-600">General Practitioner</p>
              <div className="flex items-center gap-2 text-sm text-purple-600">
                <span>15 YEARS</span>
                <span>•</span>
                <span>MBBS</span>
              </div>
              <button className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                DIGITAL CONSULT
              </button>
              <div className="mt-2 flex items-center gap-2 text-gray-600 text-sm">
                <span>📅</span> <span>Today, 04:10 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-72 border rounded-lg p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Login to Continue Booking</h2>
          <div className="text-gray-700 text-sm mb-2">To Pay</div>
          <div className="text-2xl font-bold mb-4">₹909</div>
          <button className="bg-teal-700 text-white w-full py-2 rounded-lg font-semibold">
            Login to Continue
          </button>
          <p className="mt-4 text-xs text-gray-500 text-center">
            By proceeding to avail a consultation, you agree to Apollo 24×7’s{" "}
            <a href="#" className="underline">
              Terms of use
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
    
    </div>
  );
}
