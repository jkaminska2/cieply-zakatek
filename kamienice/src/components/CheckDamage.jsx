import React, { useState } from "react";
import "../styles/CheckDamage.css";

export default function CheckDamage({ element, onSymptomsChange }) {
  const config = {
    grzejnik: {
      title: "Grzejnik",
      videoSrc: "grzejnik-test.mp4",
      options: [
        { id: "szumi", label: "Szumi" },
        { id: "stukot", label: "Stukot" },
        { id: "zimny_dol", label: "Zimny na dole" }
      ]
    },
    okno: {
      title: "Okno",
      videoSrc: "okno-test.mp4",
      options: [
        { id: "wieje", label: "Wieje od ramy" },
        { id: "paruje", label: "Paruje między szybami" },
        { id: "ciezko_chodzi", label: "Klamka ciężko chodzi" }
      ]
    }
  };

  const currentConfig = config[element.toLowerCase()] || config.grzejnik;
  const [inputs, setInputs] = useState({});
  const [view, setView] = useState("none");

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const updatedInputs = { ...inputs, [name]: checked };
    setInputs(updatedInputs);

    const selected = Object.keys(updatedInputs).filter(key => updatedInputs[key]);
    
    // Wysyłamy do rodzica natychmiast, żeby DoAlone mógł się przefiltrować
    if (onSymptomsChange) {
      onSymptomsChange(selected);
    }
  };

  // DODANA FUNKCJA: Obsługuje kliknięcie przycisku i aktualizuje lokalny komunikat
  const handleCheck = (e) => {
    e.preventDefault();
    const selected = Object.keys(inputs).filter(key => inputs[key]);
    
    if (selected.length > 0) {
      setView(selected.join("_"));
    } else {
      setView("none");
    }
  };

  return (
    <div className="check-damage">
      <h2>Jak sprawdzić {currentConfig.title.toLowerCase()}?</h2>
      
      <div className="video-container">
        <video width="640" height="360" controls poster={`${element}-miniatura.jpg`}>
          <source src={currentConfig.videoSrc} type="video/mp4" />
          Twoja przeglądarka nie obsługuje wideo.
        </video>
      </div>

      <div className="diagnosis-section">
        <h3>Co się dzieje z {currentConfig.title.toLowerCase()}?</h3>
        <div className="checkbox-group">
          {currentConfig.options.map((option) => (
            <label key={option.id} className="checkbox-item">
              {option.label}
              <input
                type="checkbox"
                name={option.id}
                checked={!!inputs[option.id]}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>
        
        <button className="btn-send" onClick={handleCheck}>
          Sprawdź diagnozę
        </button>

        <div className="wynik">
          {view === "none" ? (
            <p className="placeholder-text">Wybierz objawy i kliknij przycisk, aby zobaczyć wynik</p>
          ) : (
            <div className="result-box">
              <strong>Wykryto: {view.replace(/_/g, ", ")}</strong>
              <p>Na podstawie wybranych objawów zalecamy sprawdzenie sekcji "Co możesz zrobić samemu" poniżej.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
