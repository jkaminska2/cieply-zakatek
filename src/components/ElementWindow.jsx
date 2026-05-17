import { useState } from "react";
import "../styles/ElementWindow.css";
import DoAlone from "./DoAlone";
import CheckDamage from "./CheckDamage";
import Specialist from "./Specialist"; // Importujemy nowego fachowca

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
        onSymptomsChange={(symptoms) => {
          setSelectedSymptoms(symptoms);
          setShowResults(false); // Ukryj wyniki, dopóki znowu nie kliknie przycisku
        }}
        onConfirm={() => setShowResults(true)}
      />

      {showResults && selectedSymptoms.length > 0 && (
        <>
          <DoAlone element={element} activeSymptoms={selectedSymptoms} />
          <Specialist element={element} activeSymptoms={selectedSymptoms} />
        </>
      )}
    </div>
  );
}
