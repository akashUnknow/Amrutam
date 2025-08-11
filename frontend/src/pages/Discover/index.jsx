// src/pages/Discover/index.jsx
import React, { useState } from "react";
import { doctors } from "../../data/doctors";
import DoctorCard from "../../components/DoctorCard";

export default function Discover() {
  const uniqueConsultationModes = [...new Set(doctors.map(d => d.consultationMode))];
  const uniqueSpecializations = [...new Set(doctors.map(d => d.specialization))];
  const experienceRanges = ["0-5", "6-10", "11-16"];
  const feeRanges = ["100-500", "500-1000", "1000+"];

  const [selectedModes, setSelectedModes] = useState([]);
  const [selectedSpecializations, setSelectedSpecializations] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedFees, setSelectedFees] = useState([]);

  // Helper to toggle filter selection
  const toggleSelected = (selected, setSelected, value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearFilters = () => {
    setSelectedModes([]);
    setSelectedSpecializations([]);
    setSelectedExperiences([]);
    setSelectedFees([]);
  };

  // Filter doctors based on selected filters
  const filteredDoctors = doctors.filter((doc) => {
    // Mode filter
    if (selectedModes.length > 0 && !selectedModes.includes(doc.consultationMode)) {
      return false;
    }

    // Specialization filter
    if (selectedSpecializations.length > 0 && !selectedSpecializations.includes(doc.specialization)) {
      return false;
    }

    // Experience filter (convert experience string to number)
    if (selectedExperiences.length > 0) {
      const expYearsMatch = doc.experience.match(/^(\d+)/);
      const expYears = expYearsMatch ? parseInt(expYearsMatch[1], 10) : 0;

      const matchExperience = selectedExperiences.some((range) => {
        if (range === "0-5") return expYears >= 0 && expYears <= 5;
        if (range === "6-10") return expYears >= 6 && expYears <= 10;
        if (range === "11-16") return expYears >= 11 && expYears <= 16;
        return false;
      });
      if (!matchExperience) return false;
    }

    // Fee filter
    if (selectedFees.length > 0) {
      const fee = doc.fee;
      const matchFee = selectedFees.some((range) => {
        if (range === "100-500") return fee >= 100 && fee <= 500;
        if (range === "500-1000") return fee > 500 && fee <= 1000;
        if (range === "1000+") return fee > 1000;
        return false;
      });
      if (!matchFee) return false;
    }

    return true;
  });

  return (
    <div className="flex p-6 gap-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button
            className="text-blue-500 text-sm cursor-pointer"
            onClick={clearFilters}
          >
            Clear All
          </button>
        </div>

        {/* Mode of Consult */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Mode of Consult</h4>
          {uniqueConsultationModes.map((mode) => (
            <label key={mode} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={selectedModes.includes(mode)}
                onChange={() => toggleSelected(selectedModes, setSelectedModes, mode)}
              />
              {mode}
            </label>
          ))}
        </div>

        {/* Specialization */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Specialization</h4>
          {uniqueSpecializations.map((spec) => (
            <label key={spec} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={selectedSpecializations.includes(spec)}
                onChange={() => toggleSelected(selectedSpecializations, setSelectedSpecializations, spec)}
              />
              {spec}
            </label>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Experience (In Years)</h4>
          {experienceRanges.map((range) => (
            <label key={range} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={selectedExperiences.includes(range)}
                onChange={() => toggleSelected(selectedExperiences, setSelectedExperiences, range)}
              />
              {range}
            </label>
          ))}
        </div>

        {/* Fees */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Fees (In Rupees)</h4>
          {feeRanges.map((range) => (
            <label key={range} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={selectedFees.includes(range)}
                onChange={() => toggleSelected(selectedFees, setSelectedFees, range)}
              />
              {range}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">
            Consult General Physicians Online - Internal Medicine Specialists
            <span className="text-gray-500 text-base"> ({filteredDoctors.length} doctors)</span>
          </h1>
          <select className="border rounded px-2 py-1">
            <option>Availability</option>
          </select>
        </div>

        {/* Doctor list */}
        <div className="space-y-4">
          {filteredDoctors.length === 0 ? (
            <p className="text-gray-600">No doctors found for selected filters.</p>
          ) : (
            filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
