import { useState } from "react";
import "../styles/DoAlone.css";

export default function DoAlone({ element, activeSymptoms = [] }) {
  const [activeStep, setActiveStep] = useState(null);

  const stepsDatabase = {
    grzejnik: [
      {
        id: "ekran",
        symptom: "grzanie_sciany",
        title: "Montaż ekranu zagrzejnikowy",
        desc: "Kup w markecie budowlanym matę zagrzejnikową (pianka z folią aluminiową). Wsuń ją za grzejnik i przyklej taśmą dwustronną. Mata odbije ciepło z powrotem do pokoju, zamiast ogrzewać zimną ścianę kamienicy. Temperatura może wzrosnąć o 1-2°C.",
      },
      {
        id: "bariery",
        symptom: "zasloniety",
        title: "Usuń bariery dla powietrza",
        desc: "Podwiń ciężkie zasłony tak, aby nie zakrywały grzejnika ani termostatu. Jeśli meble stoją tuż przed kaloryferem, odsuń je na minimum 10-15 cm. Ciepłe powietrze musi swobodnie krążyć po pokoju.",
      },
      {
        id: "kurz",
        symptom: "kurz_zebra",
        title: "Wyczyść żebra grzejnika",
        desc: "Kurz działa jak koc izolacyjny. Weź suszarkę do włosów, połóż pod grzejnikiem mokrą szmatkę i wydmuchaj kurz ze środka żeberek prosto na szmatkę. Czysty grzejnik oddaje do 10% więcej ciepła.",
      },
      {
        id: "odpowietrzanie",
        symptom: "zimny_dol",
        title: "Odpowietrzanie grzejnika",
        desc: "Jeśli grzejnik jest ciepły tylko częściowo, potrzebujesz specjalnego kluczyka (kosztuje 2 zł). Włóż go w zaworek na końcu grzejnika, podstaw słoik i delikatnie przekręć. Gdy przestanie syczeć powietrze i poleci woda – zakręć z powrotem.",
      },
    ],
    okno: [
      {
        id: "uszczelki",
        symptom: "wieje_rama",
        title: "Wymiana uszczelek okiennych",
        desc: "Kup samoprzylepne uszczelki gumowe (EPDM) odpowiedniej grubości. Zerwij stare uszczelki, przemyj ramę alkoholem lub płynem do naczyń, osusz i naklej nowe w miejscach, gdzie czuć powiew chłodu.",
      },
      {
        id: "folia_okienna",
        symptom: "wieje_rama",
        title: "Termoizolacyjna folia okienna",
        desc: "Tania, przezroczysta folia, którą przykleja się do ramy taśmą dwustronną i naciąga suszarką do włosów, aż znikną zmarszczki. Tworzy dodatkową poduszkę powietrzną i działa jak trzecia szyba, blokując ucieczkę ciepła.",
      },
      {
        id: "walki_babuni",
        symptom: "szpary_drewno",
        title: "Zastosuj wałki uszczelniające (metoda babuni)",
        desc: "Na nieszczelne parapety starego typu połóż zwinięty koc, gruby ręcznik lub ozdobny wałek z materiału wypełniony piaskiem. Zablokuje to zimne powietrze, które opada prosto na podłogę.",
      },
      {
        id: "smarowanie_okuc",
        symptom: "ciezko_chodzi",
        title: "Smarowanie okuć okiennych",
        desc: "Kup smar silikonowy lub olej maszynowy w sprayu (np. popularne WD-40). Spryskaj ruchome mechanizmy i rygle na boku skrzydła okna, a następnie kilkukrotnie ruszy klamką góra-dół, aby rozprowadzić płyn.",
      },
      {
        id: "akryl_szpary",
        symptom: "pekniety_kit",
        title: "Wypełnienie pęknięć silikonem szklarskim",
        desc: "Jeśli stary kit odpada od szyb, usuń luźne kawałki. Oczyść miejsce i nałóż małą warstwę bezbarwnego silikonu szklarskiego przy użyciu pistoletu lub tubki. Wygładź palcem zmoczonym w wodzie z mydłem.",
      },
    ],
    piec: [
      {
        id: "sznur_piecowy",
        symptom: "drzwiczki_luzne",
        title: "Wymiana sznura w drzwiczkach pieca",
        desc: "Kup ognioodporny sznur uszczelniający oraz klej wysokotemperaturowy (zestaw naprawczy kosztuje ok. 25 zł). Wyciągnij stary sznur z rowka w drzwiczkach, nałóż klej, wciśnij nowy sznur i zamknij piec na kilka godzin.",
      },
      {
        id: "kotara_termiczna",
        symptom: "slabo_trzyma",
        title: "Kotara zatrzymująca ciepło",
        desc: "Skoro piec szybko stygnie, musisz odciąć ucieczkę ciepła z pokoju. Zawieś grubą kotarę lub koc w przejściu/drzwiach do chłodniejszych pomieszczeń (np. przedpokoju), aby zatrzymać nagrzane powietrze tam, gdzie przebywasz.",
      },
    ],
    drzwi: [
      {
        id: "uszczelka_szczotkowa",
        symptom: "wieje_prog",
        title: "Montaż uszczelki szczotkowej na dół drzwi",
        desc: "Kup listwę ze szczotką (samoprzylepną lub przykręcaną). Przytnij ją piłką do szerokości drzwi i zamontuj na samym dole skrzydła od wewnętrznej strony. Szczotka idealnie zablokuje lodowaty wiatr z klatki schodowej.",
      },
      {
        id: "drzwi_oscieznica",
        symptom: "nieszczelna_oscieznica",
        title: "Uszczelnienie ościeżnicy drzwiowej",
        desc: "Naklej grubą, gąbkową lub gumową uszczelkę wokół całej ramy drzwiowej (futryny). Sprawdź, czy drzwi po zamknięciu stawiają lekki opór – to znak, że uszczelka dobrze przylega.",
      },
      {
        id: "podkladki_zawiasy",
        symptom: "opadle_zawiasy",
        title: "Podniesienie drzwi na zawiasach",
        desc: "Jeśli drzwi szorują o podłogę, zdejmij je z zawiasów (poproś kogoś o pomoc) i nałóż na trzpienie zawiasów małe mosiężne podkładki dystansowe (dostępne w każdym sklepie metalowym za grosze). Drzwi uniosą się o kilka milimetrów.",
      },
      {
        id: "kotara_drzwi",
        symptom: "cienkie_skrzydlo",
        title: "Zawieszenie kotary nad drzwiami wejściowymi",
        desc: "Zamontuj prosty karnisz nad drzwiami wejściowymi od środka mieszkania i zawieś na nim ciężką, grubą zasłonę. Zaciągaj ją na noc – stworzy potężną barierę termiczną i wygłuszy hałasy z klatki.",
      },
    ],
    wentylacja: [
      {
        id: "czyszczenie_kratki",
        symptom: "zatkana_kratka",
        title: "Czyszczenie kratki wentylacyjnej",
        desc: "Zdejmij plastikową kratkę ze ściany (zazwyczaj jest na wcisk lub ma małe śrubki). Umyj ją dokładnie w ciepłej wodzie z płynem do naczyń przy użyciu starej szczoteczki. Kurz blokuje swobodny przepływ powietrza, wywołując zaduch.",
      },
      {
        id: "kratka_zwrotna",
        symptom: "ciag_wsteczny",
        title: "Montaż kratki z zaworem zwrotnym",
        desc: "Jeśli z wentylacji wieje mrozem, zmień zwykłą kratkę na taką z tzw. 'żaluzją' lub zaworem zwrotnym z folii. Pozwala ona powietrzu uchodzić z mieszkania, ale zamyka się automatycznie, gdy wiatr próbuje wtłaczać zimno do środka.",
      },
    ],
    gniazdko: [
      {
        id: "podkladka_gniazdko",
        symptom: "wieje_gniazdko",
        title: "Izolacyjna podkładka pod gniazdko (Bezpieczna)",
        desc: "W starych murach wieje z gniazdek. BEZWZGLĘDNIE WYŁĄCZ BEZPIECZNIKI w mieszkaniu. Odkręć plastikową obudowę gniazdka, załóż specjalną piankową podkładkę izolacyjną wokół puszki i przykręć plastik z powrotem. Blokuje to wiatr bez dotykania przewodów.",
      },
    ],
  };

  const key = element.toLowerCase();
  const allSteps = stepsDatabase[key] || [];

  const filteredSteps = allSteps.filter(
    (step) => !step.symptom || activeSymptoms.includes(step.symptom),
  );

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="doAlone">
      <h3>Naprawy, które możesz zrobić sam:</h3>

      {filteredSteps.length === 0 ? (
        <p
          className="instruction-content"
          style={{ textAlign: "center", border: "none" }}
        >
          Brak bezpiecznych rozwiązań samodzielnych dla wybranych objawów.
          Przejdź do sekcji dotyczącej specjalisty.
        </p>
      ) : (
        <ul className="instruction-list">
          {filteredSteps.map((step) => (
            <li
              key={step.id}
              className={`instruction-item ${
                activeSymptoms.includes(step.symptom) ? "highlight" : ""
              }`}
            >
              <div className="instruction-header">
                <span>{step.title}</span>
                <button
                  className="btn-see-how"
                  onClick={() => toggleStep(step.id)}
                >
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
      )}
    </div>
  );
}
