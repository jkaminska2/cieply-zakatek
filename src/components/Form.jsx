import { useState, useEffect } from "react";
import "../styles/form.css";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedMode, setSelectedMode] = useState("diagnosis");
  const [selectedElement, setSelectedElement] = useState("kaloryfer");
  const [specialists] = useState([
    {
      id: 1,
      name: "Jan Kowalski",
      specialization: "Specjalista od kaloryferów",
      ratePerHour: "100",
    },
    {
      id: 2,
      name: "Anna Nowak",
      specialization: "Specjalista od okien",
      ratePerHour: "120",
    },
  ]);

  const [modernizationElements, setModernizationElements] = useState([
    "kaloryfer - wymiana",
    "okno - uszczelnienie",
  ]);

  const [modElemChosen, setModElemChosen] = useState(false);
  const [localizationSet, setLocalizationSet] = useState(false);
  const [specialistsSet, setSpecialistsSet] = useState(false);

  const [availableDotations] = useState([
    {
      id: 1,
      name: "Czyste Powietrze",
      amount: "do 135 000",
      description: "Ogólnopolski program na wymianę pieca i termomodernizację.",
    },
    {
      id: 2,
      name: "Gdańska Dotacja Miejska",
      amount: "do 5 000",
      description:
        "Lokalne wsparcie na zmianę systemu ogrzewania (np. na OZE).",
    },
  ]);

  const handleModeChange = (e) => setSelectedMode(e.target.value);
  const handleElementChange = (e) => setSelectedElement(e.target.value);

  const handleInputBlur = () => {
    setModernizationElements([
      ...modernizationElements,
      "piec kaflowy - wymiana",
    ]);
  };

  const handleElementSelect = (e) => {
    handleElementChange(e);
    setModElemChosen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj logika wysyłki danych do API
    setIsSubmitted(true);
  };

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const hints = [
    "Opisz problem, np. 'kaloryfer jest zimny na dole'...",
    "Np. 'uszczelka w oknie przepuszcza powietrze'...",
    "Np. 'piec wydaje dziwne dźwięki przy starcie'...",
    "Opisz usterkę swoimi słowami, AI pomoże...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % hints.length);
    }, 3000); // Zmiana co 3 sekundy
    return () => clearInterval(interval);
  }, []);

  if (isSubmitted) {
    return (
      <div className="card success-message">
        <h2>🎉 Sukces!</h2>
        <p>Twoje zapytanie dotyczące modernizacji zostało wysłane.</p>
        <p>
          Specjalista <strong>{specialists[0].name}</strong> skontaktuje się z
          Tobą w ciągu 24h.
        </p>
        <button className="btn" onClick={() => setIsSubmitted(false)}>
          Wróć do formularza
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>System diagnozy i modernizacji</h1>

        <select className="input" onChange={handleModeChange}>
          <option value="diagnosis">Diagnoza</option>
          <option value="modernization">Modernizacja</option>
        </select>

        {selectedMode === "diagnosis" ? (
          <form className="form">
            <label>Element:</label>
            <select className="input" onChange={handleElementChange}>
              <option>Kaloryfer</option>
              <option>Okno</option>
              <option>Ściany</option>
              <option>Sufit</option>
              <option>Podłoga</option>
              <option>Piec</option>
              <option>Gniazdka</option>
              <option>Inne</option>
            </select>

            <input className="input" placeholder="Lokalizacja" />

            <label>Specjaliści:</label>
            <select className="input">
              {specialists.map((s) => (
                <option key={s.id}>
                  {s.name} - {s.ratePerHour} zł/h
                </option>
              ))}
            </select>

            <div className="result">Szacowany koszt: 670 zł</div>
          </form>
        ) : (
          <form className="form">
            <h2>Modernizacja</h2>

            <div className="list">
              {modernizationElements.map((elem, i) => (
                <div key={i} className="list-item">
                  <span>{elem}</span>
                  <button className="btn">Usuń</button>
                </div>
              ))}
            </div>

            <div className="input-group">
              <div className="ai-badge">✨ AI Support</div>
              <input
                className="input input-ai"
                placeholder={hints[currentPlaceholder]}
                onBlur={handleInputBlur}
              />
            </div>

            <select className="input" onChange={handleElementSelect}>
              <option>Kaloryfer</option>
              <option>Okno</option>
              <option>Ściany</option>
              <option>Sufit</option>
              <option>Podłoga</option>
              <option>Piec</option>
              <option>Gniazdka</option>
              <option>Inne</option>
            </select>

            {modElemChosen && (
              <select
                className="input"
                onChange={() =>
                  setModernizationElements([
                    ...modernizationElements,
                    "Ściana - usunięcie grzybu",
                  ])
                }
              >
                <option>Ściana - ocieplenie</option>
                <option>Ściana - usunięcie grzybu</option>
              </select>
            )}

            <input
              className="input"
              placeholder="Lokalizacja"
              onBlur={() => setLocalizationSet(true)}
            />

            {localizationSet && (
              <div>
                <select
                  className="input"
                  onChange={() => setSpecialistsSet(true)}
                >
                  {specialists.map((s) => (
                    <option key={s.id}>
                      {s.name} - {s.ratePerHour} zł/h
                    </option>
                  ))}
                </select>

                {specialistsSet && (
                  <div className="result">
                    <h1>Szacowany koszt: 4670 zł</h1>
                    <h2 style={{ marginTop: "20px" }}>
                      Dostępne programy wsparcia:
                    </h2>

                    <div className="dotations-list">
                      {availableDotations.map((d) => (
                        <div
                          key={d.id}
                          className="dotation-card"
                          style={{
                            padding: "10px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontWeight: "bold",
                            }}
                          >
                            <span>{d.name}</span>
                            <span style={{ color: "#2ecc71" }}>
                              +{d.amount} zł
                            </span>
                          </div>
                          <p
                            style={{
                              fontSize: "0.85rem",
                              color: "#666",
                              margin: "5px 0 0",
                            }}
                          >
                            {d.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p
                      className="hint"
                      style={{
                        fontSize: "0.75rem",
                        color: "#999",
                        marginTop: "15px",
                      }}
                    >
                      * Kwoty dotacji zależą od progu dochodowego i zakresu
                      prac.
                    </p>
                  </div>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
