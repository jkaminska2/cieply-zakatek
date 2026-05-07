import { useState } from "react";
import "../styles/DoAlone.css";

export default function DoAlone({ element, activeSymptoms = [] }) {
  const [activeStep, setActiveStep] = useState(null);

  const stepsGrzejnik = [
    {
      id: "ekran",
      symptom: "grzanie",
      title: "Ekran zagrzejnikowy",
      desc: "Kup w markecie budowlanym matę zagrzejnikową (styropian z folią aluminiową). Co robi: Odbija promieniowanie cieplne od ściany z powrotem do pokoju. Efekt: Ściana za grzejnikiem przestaje ciągnąć ciepło, a temperatura w pokoju może wzrosnąć o 1–2°C bez zmiany ustawień pieca.",
    },
    {
        id: "bariery",
        symptom: "zimno",
        title: "Usuń bariery dla powietrza",
        desc: "Odsłoń grzejnik. Długie, ciężkie zasłony, które zakrywają kaloryfer, to najgorszy wróg. Jeśli muszą być, wetknij je za grzejnik. Usuń też ozdobne zabudowy grzejników – one duszą ciepło.",
    },
    {
        id: "kurz",
        symptom: "kurz",
        title: "Wyczyść żebra grzejnika",
        desc: "Kurz to świetny izolator (w negatywnym sensie). Jeśli masz stary grzejnik żeliwny lub panelowy z tzw. grzebieniem w środku, warstwa kurzu działa jak koc, który nie pozwala ciepłu uciec do pokoju. Rozwiązanie: Odkurz grzejnik w środku (można to zrobić suszarką do włosów, wydmuchując kurz na mokrą szmatkę położoną pod grzejnikiem).",
    },
    {
        id: "szczelność",
        symptom: "zimny_dol",
        title: "Sprawdź szczelność przy rurach",
        desc: "W kamienicach rury często przechodzą przez stropy do sąsiadów. Wokół tych rur często są szpary (dziury w tynku). Rozwiązanie: Załataj te otwory (nawet wełną mineralną lub masą szpachlową). To kominy, przez które ucieka ciepłe powietrze z Twojego mieszkania do sąsiada lub do piwnicy.",
    },
  ];

  const stepsOkno = [
    {
      id: "uszczelki",
      symptom: "wieje",
      title: "Wymienić uszczelki",
      desc: "Kup gumowe uszczelki profilowe (np. typu E, P lub D) w markecie budowlanym. Jak to zrobić: Umyj i odtłuść ramę okna, a następnie przyklej uszczelkę tam, gdzie skrzydło styka się z ramą.Trik: Aby sprawdzić, gdzie najbardziej wieje, przesuń zapaloną zapalniczkę wokół ramy – tam, gdzie płomień mocno drga, musisz dać grubszą uszczelkę.",
    },
    {
        id: "folia okienna",
        symptom: "wieje",
        title: "Termoizolacyjna folia okienna",
        desc: "To tania, przezroczysta folia, którą przykleja się do ramy okiennej za pomocą taśmy dwustronnej i naciąga suszarką do włosów. Co robi: Tworzy dodatkową poduszkę powietrzną między szybą a pokojem. Działa jak dodatkowa szyba, drastycznie ograniczając ucieczkę ciepła przez szkło.",
    },
    {
        id: "Akryl lub silikon w szczeliny",
        symptom: "paruje",
        title: "Akryl lub silikon w szczeliny",
        desc: "Jeśli widzisz pęknięcia między ramą okna a ścianą (tynk): Rozwiązanie: Wypełnij je akrylem budowlanym. Jest tani, łatwy w nakładaniu i można go malować. Jeśli wieje spod parapetu, użyj silikonu lub pianki montażowej w sprayu (jeśli dziura jest duża).",
    },
      {
          id: "Wałki",
          symptom: "zimno",
          title: "\"Wałki\" pod okna (Metoda babuni)",
          desc: "To najstarszy, ale skuteczny sposób na nieszczelne parapety i dolne krawędzie okien. Rozwiązanie: Połóż na parapecie zwinięty koc, gruby ręcznik lub specjalny ozdobny \"wałek\" wypełniony piaskiem lub tkaniną. Zablokuje to dopływ zimnego powietrza, które opada na podłogę.",
      },
      {
          id: "Rolety i zasłony",
          symptom: "inne",
          title: "Rolety i zasłony",
          desc: "W kamienicach zima \"wchodzi\" przez szyby najmocniej po zachodzie słońca. Rozwiązanie: Gdy tylko zacznie się ściemniać, zasuń rolety i grube zasłony. Każda warstwa materiału to dodatkowa bariera dla zimna. Pamiętaj tylko, by odsłonić grzejnik, żeby ciepło szło na pokój, a nie pod zasłonę.",
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
      <h3>Co możesz zrobić sam:</h3>
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