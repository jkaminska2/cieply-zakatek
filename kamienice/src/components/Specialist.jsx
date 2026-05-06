import { useState } from "react";
import Form from "./Form";
import "../styles/DoAlone.css"; // Używamy tych samych stylów dla spójności

export default function Specialist({ element }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Przykładowe dane sytuacji wymagających fachowca
  const specialistCases = {
    grzejnik: [
      { id: 1, title: "Wymiana całego zaworu termostatycznego" },
      { id: 2, title: "Przeciek na rurach doprowadzających" },
      { id: 3, title: "Montaż nowego grzejnika" }
    ],
    okno: [
      { id: 1, title: "Wymiana pękniętej szyby zespolonej" },
      { id: 2, title: "Naprawa uszkodzonego mechanizmu okucia" },
      { id: 3, title: "Montaż nawiewników okiennych" }
    ]
  };

  const cases = specialistCases[element] || [];

  return (
    <div className="doAlone" style={{marginTop: '30px'}}>
      <h3>Kiedy wezwać specjalistę?</h3>
      <p className="subtitle">W tych przypadkach zalecamy kontakt z fachowcem:</p>
      
      <div className="instruction-list">
        {cases.map((item) => (
          <div className="instruction-item" key={item.id}>
            <div className="instruction-header">
              <span>{item.title}</span>
              <button 
                className="btn-see-how" 
                onClick={() => setIsFormOpen(true)}
              >
                Formularz
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL Z FORMULARZEM */}
      {isFormOpen && (
        <div className="modal-overlay" onClick={() => setIsFormOpen(false)} style={{zIndex: 3000}}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{maxWidth: '800px', width: '90%'}}>
            <button className="close-btn" onClick={() => setIsFormOpen(false)}>×</button>
            <div style={{padding: '20px'}}>
               <Form />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}