// src/components/DoctorCard.jsx
import React, { useMemo, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  // next 7 days for the date strip
  const dates = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return d;
      }),
    []
  );

  const handleContinue = () => {
    console.log({
      doctorId: doctor.id,
      date: selectedDate.toISOString().slice(0, 10),
      time: selectedSlot,
    });
    navigate("/booking-confirmation");
    setOpen(false);

  };

  // groups in fixed order
  const groups = [
    { key: "morning", label: "Morning", icon: "☀️" },
    { key: "afternoon", label: "Afternoon", icon: "🌤️" },
    { key: "evening", label: "Evening", icon: "🌙" },
  ];

  const section = (key) => Array.isArray(doctor?.shifts?.[key]) ? doctor.shifts[key] : [];

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

        {/* Open booking sheet */}
        <Sheet open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSelectedSlot(null); }}>
          <SheetTrigger asChild>
            <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50">
              Online Consult
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="!w-[640px] sm:!w-[740px]">
            <SheetHeader className="mb-2">
              <SheetTitle>Schedule Appointment</SheetTitle>
              <div className="flex items-center gap-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div className="text-left">
                  <div className="font-medium">{doctor.name}</div>
                  <SheetDescription className="m-0">
                    {doctor.experience} • {doctor.specialization}
                  </SheetDescription>
                  <button className="text-sm text-blue-600 hover:underline">
                    View Profile
                  </button>
                </div>
              </div>
            </SheetHeader>

            {/* Date strip */}
            <div className="flex items-center gap-2 mt-3 overflow-x-auto p-4">
              {dates.map((d, i) => {
                const isSel = d.toDateString() === selectedDate.toDateString();
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(d)}
                    className={[
                      "min-w-[35px] px-3 py-2 rounded-sm border text-center",
                      isSel ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-blue-50",
                    ].join(" ")}
                  >
                    <div className="text-xs">
                      {d.toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div className="font-semibold">{d.getDate()}</div>
                    <div className="text-xs">
                      {d.toLocaleDateString("en-US", { month: "short" })}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Slot groups: Morning, Afternoon, Evening */}
            <div className="mt-4 space-y-6 p-4">
              {groups.map(({ key, label, icon }) => {
                const times = section(key);
                if (!times.length) return null; // hide group if doctor doesn't have it
                return (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{icon}</span>
                        <span className="font-normal">{label}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {times.length} {times.length === 1 ? "slot" : "slots"}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map((t) => {
                        const active = selectedSlot === t;
                        return (
                          <button
                            key={`${key}-${t}`}
                            onClick={() => setSelectedSlot(t)}
                            className={[
                              "rounded-md border px-3 py-2 text-sm",
                              active
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white hover:bg-blue-50",
                            ].join(" ")}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="fixed bottom-0 right-0 left-0 sm:left-auto sm:w-[inherit] sm:max-w-[inherit] bg-white border-t p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">₹{doctor.fee}</span>
                <button
                  disabled={!selectedSlot}
                  className={[
                    "px-4 py-2 rounded-md text-white",
                    selectedSlot ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed",
                  ].join(" ")}
                  // onClick={() => {
                  
                  //   // handle proceed with doctor.id, selectedDate, selectedSlot
                  //   // e.g., navigate or call API
                  //   console.log({
                  //     doctorId: doctor.id,
                  //     date: selectedDate.toISOString().slice(0, 10),
                  //     time: selectedSlot,
                  //   })
                  //   setOpen(false);
                  // }}
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <p className="text-xs text-green-600">{doctor.availability}</p>
      </div>
    </div>
  );
}
