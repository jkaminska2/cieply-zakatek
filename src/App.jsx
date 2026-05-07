import { useState } from "react";
import "./App.css";
import ElementWindow from "./components/ElementWindow";
import Navbar from "./components/Navbar";
import model from './model.png'

function showTooltip(text) {
  const t = document.getElementById("cursor-tooltip");
  t.innerText = text;
  t.style.opacity = 1;
}

function hideTooltip() {
  const t = document.getElementById("cursor-tooltip");
  t.style.opacity = 0;
}

function moveTooltip(e) {
  const t = document.getElementById("cursor-tooltip");
  t.style.left = e.pageX + 15 + "px";
  t.style.top = e.pageY + 15 + "px";
}

export default function App() {
  const [selectedElement, setSelectedElement] = useState(null);
  

  return (
    <div className="main">
      <Navbar></Navbar>

      <div className="content-layout">
        <div className="model-container">
          <div className="model-wrapper">
            {/* Obrazek musi być tłem dla hotspotów */}
            <img src={model} alt="Model" className="side-model" />

            {/* OKNO */}
            <div
              className="hotspot window-hotspot"
              onMouseEnter={() => showTooltip("Okno")}
              onMouseLeave={hideTooltip}
              onMouseMove={moveTooltip}
              onClick={() => setSelectedElement("okno")}
            >
            </div>

            {/* GRZEJNIK */}
            <div
                className="hotspot radiator-hotspot"
                onMouseEnter={() => showTooltip("Grzejnik")}
                onMouseLeave={hideTooltip}
                onMouseMove={moveTooltip}
                onClick={() => setSelectedElement("grzejnik")}
            >

            </div>
          </div>
        </div>

        <div className="info-panel">
          {selectedElement ? (
            <div className="element-active">
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
      <div id="cursor-tooltip"></div>
    </div>
  );
}
