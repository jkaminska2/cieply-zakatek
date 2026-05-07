import { useState } from "react";
import "../styles/ElementWindow.css";
import DoAlone from "./DoAlone";
import CheckDamage from "./CheckDamage";
import Specialist from "./Specialist";

export default function ElementWindow({ element }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="element">
      <button className="close-btn" onClick={() => window.location.reload()}>
        ×
      </button>
      <h1>{element}</h1>

      <CheckDamage
        element={element}
        onSymptomsChange={setSelectedSymptoms}
        onConfirm={() => setShowResults(true)}
      />

      <>
        <DoAlone element={element} activeSymptoms={selectedSymptoms} />

        <Specialist element={element} />
      </>
    </div>
  );
}
