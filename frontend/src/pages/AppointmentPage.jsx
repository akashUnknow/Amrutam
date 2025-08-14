import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { doctors } from "../data/doctors";
import { clearBooking } from "../store/bookingSlice"; // import action
import { useNavigate } from "react-router-dom";

export default function AppointmentPage() {
  const { doctorId, date, time } = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doctor = doctors.find((doc) => doc.id === doctorId) || {};

  const handleCancel = () => {
    dispatch(clearBooking());
    navigate("/"); // or wherever you want the user to go after cancel
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex flex-wrap gap-6">
        {/* Left Section */}
        <div className="flex-1 border rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Appointment Details</h2>
          <div className="flex items-center gap-4">
            <img
              src={doctor.image || "https://via.placeholder.com/80"}
              alt="Doctor"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{doctor.name || "Unknown Doctor"}</h3>
              <p className="text-gray-600">{doctor.specialization || "Unknown Specialization"}</p>
              <div className="flex items-center gap-2 text-sm text-purple-600">
                <span>{doctor.experience || "Unknown Experience"}</span>
              </div>
              <button className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                DIGITAL CONSULT
              </button>
              <div className="mt-2 flex items-center gap-2 text-gray-600 text-sm">
                <span>📅</span> <span>{date}, {time}</span>
              </div>
              {/* Cancel Button */}
              <button
                onClick={handleCancel}
                className="mt-4 px-3 py-1 bg-red-100 text-red-700 text-xs rounded hover:bg-red-200"
              >
                Cancel Slot
              </button>
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
    </div>
  );
}
