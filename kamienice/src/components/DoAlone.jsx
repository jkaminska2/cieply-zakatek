import { useState } from "react";
import "../styles/DoAlone.css";

export default function DoAlone({ element, activeSymptoms = [] }) {
  const [activeStep, setActiveStep] = useState(null);

  const stepsGrzejnik = [
    {
      id: "odpowietrzanie",
      symptom: "zimny_dol",
      title: "Odpowietrzyć grzejnik",
      desc: "Jeśli góra grzejnika jest zimna, potrzebujesz kluczyka za ok. 2-5 zł. Włóż go w zawór, przekręć lekko, aż usłyszysz syk powietrza, a potem poczuj kropelkę wody. Zakręć i gotowe!",
    },
    {
      id: "ekran",
      title: "Założyć ekran zagrzejnikowy",
      desc: "Kup srebrną matę w markecie (ok. 20 zł). Wsuń ją za grzejnik i przyklej do ściany taśmą dwustronną. Dzięki temu ciepło wróci do pokoju, zamiast uciekać w zimną ścianę kamienicy.",
    },
    {
      id: "odsloniecie",
      title: "Odsłonić grzejnik",
      desc: "Podwiń zasłony tak, by nie zakrywały grzejnika ani termostatu. Jeśli zasłony są długie, ciepło ucieka prosto w okno, zamiast ogrzewać pokój.",
    },
    {
      id: "czyszczenie",
      title: "Wyczyścić żebra grzejnika",
      desc: "Kurz to izolator - działa jak koc na grzejniku. Użyj wilgotnej szmatki lub szczotki na długim kiju, by wymieść kurz ze środka żeberek.",
    },
  ];

  const stepsOkno = [
    {
      id: "uszczelki",
      symptom: "wieje",
      title: "Wymienić uszczelki",
      desc: "Kup samoprzylepne uszczelki gumowe (EPDM). Wyjdź stare, wyczyść ramę alkoholem i naklej nowe w miejscach, gdzie czuć powiew zimnego powietrza.",
    },
    {
      id: "tryb_zimowy",
      title: "Ustawić tryb zimowy",
      desc: "Większość nowoczesnych okien ma bolce na boku skrzydła. Przekręć je kluczem imbusowym tak, by mocniej dociskały uszczelkę do ramy (szczelina powinna być mniejsza).",
    },
    {
      id: "folia_termiczna",
      title: "Nakleić folię termoizolacyjną",
      desc: "To tania przezroczysta folia, którą nakleja się na ramę i naciąga suszarką. Tworzy dodatkową poduszkę powietrzną, która działa jak trzecia szyba.",
    },
  ];

  const allSteps = element.toLowerCase() === "grzejnik" ? stepsGrzejnik : stepsOkno;

  const filteredSteps = allSteps.filter(step => 
    !step.symptom || activeSymptoms.includes(step.symptom)
  );

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="doAlone">
      <h3>{activeSymptoms.length > 0 ? "Zalecane działania dla Ciebie:" : "Ogólne porady:"}</h3>
      <ul className="instruction-list">
        {filteredSteps.map((step) => (
          <li key={step.id} className="instruction-item">
            <div className="instruction-header">
              <span>{step.title}</span>
              <button className="btn-see-how" onClick={() => toggleStep(step.id)}>
                {activeStep === step.id ? "ZAMKNIJ" : "ZOBACZ JAK"}
              </button>
            </div>
            {activeStep === step.id && (
              <div className="instruction-content">
                <p>{step.desc}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}