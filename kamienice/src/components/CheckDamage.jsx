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
        { id: "zimny", label: "Jest zimny" }
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
    
    if (onSymptomsChange) {
      onSymptomsChange(selected);
    }
  };

  return (
    <div className="check-damage">
      <h2>Jak sprawdzić {currentConfig.title.toLowerCase()}?</h2>
      
      <div className="video-container">
        <video width="640" height="360" controls poster={`${element}-miniatura.jpg`}>
          <source src={currentConfig.videoSrc} type="video/mp4" />
          Twoja przeglądarka nie obsługuje wideo
        </video>
      </div>

      <div className="diagnosis-section">
        <h3>Co się dzieje?</h3>
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
      </div>
    </div>
  );
}
