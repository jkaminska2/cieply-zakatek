import { useState } from "react";
import ElementWindow from "../components/ElementWindow";
import "./styles/Home.css";

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

export default function Home() {
  const isMobile = window.innerWidth <= 800;
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="home">
      <div className="content-layout">
        <div className="model-container">
          <div className="model-wrapper">
            <img src="/cieply-zakatek/modelv2.png" alt="Model" className="side-model" />

            <div
              className="hotspot window-hotspot"
              onMouseEnter={() => showTooltip("Okno")}
              onMouseLeave={hideTooltip}
              onMouseMove={moveTooltip}
              onClick={() => setSelectedElement("okno")}
            />

            <div
              className="hotspot radiator-hotspot"
              onMouseEnter={() => showTooltip("Grzejnik")}
              onMouseLeave={hideTooltip}
              onMouseMove={moveTooltip}
              onClick={() => setSelectedElement("grzejnik")}
            />

            <div
              className="hotspot stove-hotspot"
              onMouseEnter={() => showTooltip("Piec")}
              onMouseLeave={hideTooltip}
              onMouseMove={moveTooltip}
              onClick={() => setSelectedElement("piec")}
            />

            <div
              className="hotspot door-hotspot"
              onMouseEnter={() => showTooltip("Drzwi")}
              onMouseLeave={hideTooltip}
              onMouseMove={moveTooltip}
              onClick={() => setSelectedElement("drzwi")}
            />

            <div
              className="hotspot ventilation-hotspot"
              onMouseEnter={() => showTooltip("Wentylacja")}
              onMouseLeave={hideTooltip}
              onMouseMove={moveTooltip}
              onClick={() => setSelectedElement("wentylacja")}
            />

            <div
              className="hotspot socket-hotspot"
              onMouseEnter={() => showTooltip("Gniazdko")}
              onMouseLeave={hideTooltip}
              onMouseMove={moveTooltip}
              onClick={() => setSelectedElement("gniazdko")}
            />
          </div>
        </div>

        <div className="info-panel" id="info-panel">
          {selectedElement ? (
            <div className="element-active">
              <ElementWindow element={selectedElement} />
            </div>
          ) : (
            <div className="placeholder-box">
              <div className="pulse-icon">?</div>
              <p>
                {isMobile
                  ? "Kliknij na odpowiedni poniżej przycisk elementu pomieszczenia, aby zobaczyć szczegóły ↓"
                  : "Kliknij na element pomieszczenia, aby zobaczyć szczegóły"}
              </p>
            </div>
          )}
        </div>

        {/* TYLKO JEDEN .buttons */}
        <div className="buttons">
          <button
            className="furniture-button"
            onClick={() => {
              setSelectedElement("piec");
              document.getElementById("info-panel").scrollIntoView({ behavior: "smooth" });
            }}>
            <img src="/cieply-zakatek/piec.png" alt="Piec" />
            <span className="label">Piec</span>
          </button>

          <button
            className="furniture-button"
            onClick={() => {
              setSelectedElement("okno");
              document.getElementById("info-panel").scrollIntoView({ behavior: "smooth" });
            }}>
            <img src="/cieply-zakatek/okno.png" alt="Okno" />
            <span className="label">Okno</span>
          </button>

          <button
            className="furniture-button"
            onClick={() => {
              setSelectedElement("grzejnik");
              document.getElementById("info-panel").scrollIntoView({ behavior: "smooth" });
            }}>
            <img src="/cieply-zakatek/grzejnik.png" alt="Grzejnik" />
            <span className="label">Grzejnik</span>
          </button>

          <button
            className="furniture-button"
            onClick={() => {
              setSelectedElement("drzwi");
              document.getElementById("info-panel").scrollIntoView({ behavior: "smooth" });
            }}>
            <img src="/cieply-zakatek/drzwi.png" alt="Drzwi" />
            <span className="label">Drzwi</span>
          </button>

          <button
            className="furniture-button"
            onClick={() => {
              setSelectedElement("wentylacja");
              document.getElementById("info-panel").scrollIntoView({ behavior: "smooth" });
            }}>
            <img src="/cieply-zakatek/wentylacja.png" alt="Wentylacja" />
            <span className="label">Wentylacja</span>
          </button>

          <button
            className="furniture-button"
            onClick={() => {
              setSelectedElement("gniazdko");
              document.getElementById("info-panel").scrollIntoView({ behavior: "smooth" });
            }}>
            <img src="/cieply-zakatek/gniazdko.png" alt="Gniazdko" />
            <span className="label">Gniazdko</span>
          </button>
        </div>
      </div>

      <div id="cursor-tooltip"></div>
    </div>
  );
}