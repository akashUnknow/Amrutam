// src/components/DoctorCard.jsx
import React from "react";

export default function DoctorCard({ doctor }) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
      {/* Left: Image + Info */}
      <div className="flex gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-20 h-20 rounded-md object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.specialization}</p>
          <p className="text-sm text-blue-600 font-medium">{doctor.experience}</p>
          <p className="text-gray-500">{doctor.location}</p>
          <p className="text-gray-400 text-sm">{doctor.clinic}</p>
        </div>
      </div>

      {/* Right: Fee + Button */}
      <div className="flex flex-col items-end gap-2">
        <p className="text-lg font-bold">₹{doctor.fee}</p>
        <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50">
          Online Consult
        </button>
        <p className="text-xs text-green-600">{doctor.availability}</p>
      </div>
    </div>
  );
}
