import { useState } from "react";
import ModernizationList from "./ModernizationList";
import AIInput from "./AIInput";
import ElementSelect from "./ElementSelect";
import SpecialistSelect from "./SpecialistSelect";
import CostSummary from "./CostSummary";
import "../../styles/form.css";

const AVAILABLE_DOTATIONS = [
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
    description: "Lokalne wsparcie na zmianę systemu ogrzewania (np. na OZE).",
  },
];

const KEYWORD_MAP = [
  {
    keywords: ["kaloryfer", "grzejnik", "zimny grzejnik"],
    element: "kaloryfer - wymiana",
  },
  {
    keywords: ["okno", "nieszczelne okno", "wieje z okna", "okna"],
    element: "okno - uszczelnienie",
  },
  {
    keywords: ["piec", "kocioł", "ogrzewanie"],
    element: "piec - wymiana",
  },
  {
    keywords: ["grzyb", "pleśń", "wilgoć"],
    element: "Ściana - usunięcie grzybu",
  },
  {
    keywords: ["zimna ściana", "ocieplenie", "ucieka ciepło"],
    element: "Ściana - ocieplenie",
  },
  {
    keywords: ["drzwi", "nieszczelne drzwi"],
    element: "Drzwi - uszczelnienie",
  },
];

const MANUAL_ELEMENT_OPTIONS = {
  Ściana: [
    "Ściana - ocieplenie",
    "Ściana - usunięcie grzybu",
    "Ściana - malowanie",
  ],

  Okna: ["Okno - uszczelnienie", "Okno - wymiana", "Okno - regulacja"],

  Drzwi: ["Drzwi - uszczelnienie", "Drzwi - wymiana"],

  Piec: ["Piec - wymiana", "Piec - czyszczenie", "Piec - serwis"],

  Kaloryfer: ["Kaloryfer - wymiana", "Kaloryfer - odpowietrzenie"],

  Inne: ["Inne - ocieplenie", "Inne - uszczelnienie", "Inne - modernizacja"],
};

export default function ModernizationForm({ specialists, onSubmit }) {
  const [modernizationElements, setModernizationElements] = useState([]);
  const [modElemChosen, setModElemChosen] = useState(false);
  const [localizationSet, setLocalizationSet] = useState(false);
  const [specialistsSet, setSpecialistsSet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [location, setLocation] = useState("");
  const [aiMessage, setAiMessage] = useState("");
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const addElement = (element) => {
    setModernizationElements((prev) => {
      if (prev.includes(element)) return prev;

      return [...prev, element];
    });
  };

  const removeElement = (index) => {
    setModernizationElements((prev) => prev.filter((_, i) => i !== index));
  };

  const recognizeElements = (input) => {
    const normalizedInput = input.toLowerCase();

    let found = [];

    KEYWORD_MAP.forEach(({ keywords, element }) => {
      const matched = keywords.some((keyword) =>
        normalizedInput.includes(keyword),
      );

      if (matched) {
        found.push(element);

        setModernizationElements((prev) => {
          if (prev.includes(element)) return prev;

          return [...prev, element];
        });
      }
    });

    if (found.length > 0) {
      setAiMessage(`Dodano ${found.length} element(y)`);
    } else {
      setAiMessage("Nie znaleziono pasujących elementów");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Modernizacja</h2>
      <p className="subtitle">
        Opisz problem lub wybierz element modernizacji.
      </p>
      <div className="progress-wrapper">
        <p className="step-label">Krok {step} z 3</p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
            }}
          />
        </div>
      </div>

      {step === 1 && (
        <>
          <ModernizationList
            elements={modernizationElements}
            onRemove={removeElement}
          />

          <AIInput onSubmit={recognizeElements} />

          {aiMessage && <div className="ai-message">{aiMessage}</div>}

          <div className="section-card">
            <div className="section-header">Wybór ręczny</div>

            <select
              className="input"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Wybierz element</option>

              {Object.keys(MANUAL_ELEMENT_OPTIONS).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {selectedCategory && (
              <div className="manual-add-section">
                <select
                  className="input"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">Wybierz działanie</option>

                  {MANUAL_ELEMENT_OPTIONS[selectedCategory].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className="btn-primary"
                  disabled={!selectedOption}
                  onClick={() => {
                    addElement(selectedOption);
                    setSelectedOption("");
                  }}
                >
                  Dodaj element
                </button>
              </div>
            )}
          </div>

          <div className="section-card">
            <div className="section-header">Lokalizacja</div>

            <div className="location-row">
              <input
                className="input"
                placeholder="Wpisz lokalizację"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <button
                type="button"
                className="btn-primary"
                disabled={!location}
                onClick={() => setLocalizationSet(true)}
              >
                Zatwierdź lokalizację
              </button>
            </div>
          </div>

          {localizationSet && (
            <SpecialistSelect
              specialists={specialists}
              onChange={() => setSpecialistsSet(true)}
            />
          )}

          {specialistsSet && (
            <button
              type="button"
              className="btn-primary"
              onClick={() => setStep(2)}
            >
              Zobacz koszty i dotacje
            </button>
          )}
        </>
      )}
      {step === 2 && (
        <>
          <CostSummary cost={4670} dotations={AVAILABLE_DOTATIONS} />

          <div className="step-buttons">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStep(1)}
            >
              Wstecz
            </button>

            <button
              type="button"
              className="btn-primary"
              onClick={() => setStep(3)}
            >
              Przejdź dalej
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <div className="section-card">
          <div className="section-header">Dane kontaktowe</div>

          <input
            className="input"
            placeholder="Imię i nazwisko"
            value={personalData.fullName}
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                fullName: e.target.value,
              }))
            }
          />

          <input
            className="input"
            placeholder="Telefon"
            value={personalData.phone}
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
          />

          <input
            className="input"
            placeholder="Email"
            value={personalData.email}
            onChange={(e) =>
              setPersonalData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />

          <div className="step-buttons">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStep(2)}
            >
              Wstecz
            </button>

            <button type="submit" className="btn-primary">
              Wyślij zgłoszenie
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
