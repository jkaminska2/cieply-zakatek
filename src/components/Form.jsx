import { useState, useEffect } from "react";
import "../styles/form.css";

// import { useState } from "react";
import DiagnosisForm from "./form-utils/DiagnosisForm";
import ModernizationForm from "./form-utils/ModernizationForm";
import SuccessMessage from "./form-utils/SuccessMessage";
// import DiagnosisForm from "./DiagnosisForm";
// import ModernizationForm from "./ModernizationForm";
// import SuccessMessage from "./SuccessMessage";
// import "../styles/form.css";

const SPECIALISTS = [
  {
    id: 1,
    name: "Jan Kowalski",
    specialization: "Specjalista od kaloryferów",
    ratePerHour: "100",
  },
  {
    id: 2,
    name: "Anna Nowak",
    specialization: "Specjalista od okien",
    ratePerHour: "120",
  },
];

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedMode, setSelectedMode] = useState("modernization");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <SuccessMessage
        specialistName={SPECIALISTS[0].name}
        onReset={() => setIsSubmitted(false)}
      />
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>System diagnozy i modernizacji</h1>

        <select
          className="input"
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
        >
          <option value="modernization">Modernizacja</option>
          <option value="diagnosis">Diagnoza</option>
        </select>

        {selectedMode === "diagnosis" ? (
          <DiagnosisForm specialists={SPECIALISTS} />
        ) : (
          <ModernizationForm
            specialists={SPECIALISTS}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
