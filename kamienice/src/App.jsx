import { useState } from "react";
import "./App.css";
import ElementWindow from "./components/ElementWindow";
import Navbar from "./components/Navbar";

export default function App() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="main">
      <h1 className="haslo">Ciepły zakątek</h1>

      <div className="content-layout">
        <div className="model-container">
          <div className="model-wrapper">
            {/* Obrazek musi być tłem dla hotspotów */}
            <img src="/model.png" alt="Model" className="side-model" />
            
            {/* OKNO */}
            <div 
              className="hotspot window-hotspot" 
              onClick={() => setSelectedElement("okno")}
            >
              <span className="tooltip">Okno</span>
            </div>

            {/* GRZEJNIK */}
            <div 
              className="hotspot radiator-hotspot" 
              onClick={() => setSelectedElement("grzejnik")}
            >
              <span className="tooltip">Grzejnik</span>
            </div>
          </div>
        </div>

        <div className="info-panel">
          {selectedElement ? (
            <div className="element-active">
              <button className="close-btn" onClick={() => setSelectedElement(null)}>×</button>
              <ElementWindow element={selectedElement} />
            </div>
          ) : (
            <div className="placeholder-box">
              <div className="pulse-icon">?</div>
              <p>Kliknij na element pomieszczenia, aby zobaczyć szczegóły</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
