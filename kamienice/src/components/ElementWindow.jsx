import { useState } from "react";
import "../styles/ElementWindow.css";
import DoAlone from "./DoAlone";
import CheckDamage from "./CheckDamage";

export default function ElementWindow({ element }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  return (
    <div className="element">
      <h1>{element}</h1>
      
      <CheckDamage 
        element={element} 
        onSymptomsChange={setSelectedSymptoms} 
      />
      
      <DoAlone 
        element={element} 
        activeSymptoms={selectedSymptoms} 
      />
      
      <div className="question-box">Do czego potrzebujesz specjalisty?</div>
    </div>
  );
}
