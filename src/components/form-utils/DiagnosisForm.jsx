import { useState } from "react";
import SpecialistSelect from "./SpecialistSelect";
import ElementSelect from "./ElementSelect";

export default function DiagnosisForm({ specialists }) {
  const [selectedElement, setSelectedElement] = useState("kaloryfer");

  return (
    <form className="form">
      <label>Element:</label>
      <ElementSelect
        value={selectedElement}
        onChange={(e) => setSelectedElement(e.target.value)}
      />

      <input className="input" placeholder="Lokalizacja" />

      <label>Specjaliści:</label>
      <SpecialistSelect specialists={specialists} />

      <div className="result">Szacowany koszt: 670 zł</div>
    </form>
  );
}
