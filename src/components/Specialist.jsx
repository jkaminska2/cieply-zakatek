import { useState } from "react";
import Form from "./Form";
import "../styles/DoAlone.css";

export default function Specialist({ element, activeSymptoms = [] }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const specialistDatabase = {
    grzejnik: [
      {
        id: "hydraulik_wyciek",
        symptom: "wyciek_rdza",
        title: "Uszczelnienie wycieku lub wymiana zaworu głównego grzejnika"
      },
      {
        id: "hydraulik_Plukanie",
        symptom: "chlodno_mimo_grzania",
        title: "Odmulanie i płukanie instalacji starego grzejnika żeliwnego"
      }
    ],
    okno: [
      {
        id: "szklarz_szyba",
        symptom: "paruje_szyby",
        title: "Wymiana pękniętego lub nieszczelnego pakietu szyby zespolonej"
      },
      {
        id: "serwis_okuc",
        symptom: "zepsute_okucie",
        title: "Kompleksowa naprawa lub wymiana wyrobionych okuć okiennych"
      }
    ],
    piec: [
      {
        id: "zdun_dym",
        symptom: "ulatnia_dym",
        title: "Pilne czyszczenie, uszczelnianie przewodów i przemurowanie pieca"
      },
      {
        id: "zdun_kafle",
        symptom: "popekane_kafle",
        title: "Uzupełnianie pękniętych kafli konstrukcyjnych specjalną glinką zduńską"
      },
      {
        id: "kominiarz_ciag",
        symptom: "brak_ciagu",
        title: "Mechaniczne czyszczenie pionu dymowego przez certyfikowanego kominiarza"
      }
    ],
    drzwi: [
      {
        id: "slusarz_zamek",
        symptom: "luzna_klamka",
        title: "Wymiana zużytego zamka wpuszczanego w zabytkowych drzwiach"
      },
      {
        id: "stolarz_drzwi",
        symptom: "cienkie_skrzydlo",
        title: "Profesjonalne wygłuszenie skrzydła drzwiowego lub montaż nowych drzwi"
      }
    ],
    wentylacja: [
      {
        id: "kominiarz_grzyb",
        symptom: "grzyb_kratka",
        title: "Ekspertyza kominiarska pionu wentylacyjnego budynku i usuwanie zarodników"
      },
      {
        id: "kominiarz_zapachy",
        symptom: "zapachy_sasiadow",
        title: "Sprawdzenie szczelności i drożności przewodów wentylacyjnych w kamienicy"
      }
    ],
    gniazdko: [
      {
        id: "elektryk_iskry",
        symptom: "skwierczy_iskrzy",
        title: "Wymiana wypalonych przewodów aluminiowych oraz montaż nowego gniazda"
      },
      {
        id: "elektryk_przypalenia",
        symptom: "przypalenia",
        title: "Modernizacja przeciążonego obwodu elektrycznego mieszkania"
      },
      {
        id: "elektryk_puszka",
        symptom: "wypada_sciana",
        title: "Osadzenie nowej puszki elektroinstalacyjnej w starym kruchym tynku"
      }
    ]
  };

  const key = element ? element.toLowerCase() : "";
  const allExpertCases = specialistDatabase[key] || [];

  const filteredCases = allExpertCases.filter((item) =>
    activeSymptoms.includes(item.symptom)
  );

  if (filteredCases.length === 0) return null;

  return (
    <div className="doAlone">
      <h3>Wymagana pomoc specjalisty!</h3>
      <p className="subtitle">Wykryto usterki, których nie należy naprawiać samodzielnie:</p>

      <div className="instruction-list">
        {filteredCases.map((item) => (
          <div className="instruction-item" key={item.id} >
            <div className="instruction-header">
              <span>
                ⚠️ {item.title}
              </span>
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

      {isFormOpen && (
        <div className="modal-overlay" onClick={() => setIsFormOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsFormOpen(false)}>×</button>
            <div>
              <Form />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}