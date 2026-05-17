import React, { useState } from "react";
import "../styles/CheckDamage.css";

export default function CheckDamage({ element, onSymptomsChange, onConfirm }) {
  const config = {
    grzejnik: {
      title: "Grzejnik",
      videoSrc: "https://www.youtube.com/embed/f0G41epidNQ?si=DBjT1I4l20Q9GJi2",
      isYoutube: true,
      options: [
        { id: "grzanie_sciany", label: "Grzeje w ścianę, a nie w pokój" },
        { id: "kurz_zebra", label: "Zakurzone, brudne żebra grzejnika" },
        { id: "zimny_dol", label: "Grzejnik jest zimny na górze lub na dole" },
        {
          id: "zasloniety",
          label: "Zasłonięty przez meble lub długie zasłony",
        },
        { id: "wyciek_rdza", label: "Widać rdzę lub kapie z niego woda" },
        {
          id: "chlodno_mimo_grzania",
          label: "W pokoju jest chłodno, mimo gorącego grzejnika",
        },
      ],
    },
    okno: {
      title: "Okno",
      videoSrc: "https://www.youtube.com/embed/kiitzsEiGQw?si=6aKtovTCSGsH2CO9",
      isYoutube: true,
      options: [
        { id: "wieje_rama", label: "Wieje zimnem od ramy lub spod parapetu" },
        { id: "paruje_szyby", label: "Paruje woda między szybami" },
        {
          id: "ciezko_chodzi",
          label: "Klamka ciężko chodzi lub się nie domyka",
        },
        {
          id: "szpary_drewno",
          label: "Stare drewniane okno ma widoczne szpary",
        },
        { id: "pekniety_kit", label: "Wykruszył się stary kit wokół szyby" },
        {
          id: "zepsute_okucie",
          label: "Okno opadło na zawiasach i szura przy zamykaniu",
        },
      ],
    },
    piec: {
      title: "Piec",
      videoSrc: "https://www.youtube.com/embed/1Sx9a5P2s9Q?si=jLWajAsYg-IlnZTs",
      isYoutube: true,
      options: [
        {
          id: "popekane_kafle",
          label: "Popękane kafle lub szczeliny w zaprawie",
        },
        {
          id: "ulatnia_dym",
          label: "Czuję dym lub zapach spalenizny w pokoju",
        },
        {
          id: "slabo_trzyma",
          label: "Piec szybko stygnie i słabo trzyma ciepło",
        },
        {
          id: "drzwiczki_luzne",
          label: "Drzwiczki paleniska się nie domykają",
        },
        { id: "brak_ciagu", label: "Ogień słabo się pali, piec nie ma ciągu" },
        {
          id: "duze_zuzycie",
          label: "Zużywa bardzo dużo opału/gazu, a w domu jest zimno",
        },
      ],
    },
    drzwi: {
      title: "Drzwi",
      videoSrc: "https://www.youtube.com/embed/W7LzkaqigYI?si=9eZshgPfjKgbk2Rm",
      isYoutube: true,
      options: [
        {
          id: "wieje_prog",
          label: "Wieje mocno od podłogi (szpara pod drzwiami)",
        },
        {
          id: "nieszczelna_oscieznica",
          label: "Zimno ucieka bokami drzwi na klatkę schodową",
        },
        { id: "opadle_zawiasy", label: "Drzwi opadły i szorują o podłogę" },
        {
          id: "cienkie_skrzydlo",
          label: "Drzwi są cienkie i słychać przez nie całą klatkę",
        },
        {
          id: "luzna_klamka",
          label: "Klamka lub zamek zacinają się przy zamykaniu",
        },
        {
          id: "brak_progu",
          label: "Brak progu lub próg jest zniszczony i wytarty",
        },
      ],
    },
    wentylacja: {
      title: "Wentylacja",
      videoSrc: "https://www.youtube.com/embed/O2Qz6YfXxSk?si=b0RRxFFJv1JCNvPB",
      isYoutube: true,
      options: [
        {
          id: "ciag_wsteczny",
          label: "Z kratki wentylacyjnej wieje zimne powietrze",
        },
        {
          id: "grzyb_kratka",
          label: "Wokół kratki pojawia się ciemny nalot/grzyb",
        },
        {
          id: "zatkana_kratka",
          label: "Kratka jest całkowicie zakurzona lub zaklejona",
        },
        {
          id: "zapachy_sasiadow",
          label: "Przez wentylację czuję zapachy z innych mieszkań",
        },
        {
          id: "swist_wiatru",
          label: "Podczas wiatru z kratki słychać głośny świst",
        },
        {
          id: "wilgoc_szyby",
          label: "W mieszkaniu jest zaduch, a rano okna są całe mokre",
        },
      ],
    },
    gniazdko: {
      title: "Gniazdko elektryczne",
      videoSrc: "https://www.youtube.com/embed/t_urC5341fU?si=Sq0llsQOT5WwWKBO",
      isYoutube: true,
      options: [
        {
          id: "wieje_gniazdko",
          label: "Czuję wyraźny podmuch zimna z wnętrza gniazdka",
        },
        {
          id: "skwierczy_iskrzy",
          label: "Gniazdko skwierczy, syczy lub iskrzy przy wkładaniu wtyczki",
        },
        {
          id: "wypada_sciana",
          label: "Całe gniazdko rusza się i wypada ze ściany",
        },
        {
          id: "cieple_kable",
          label: "Plastik wokół gniazdka robi się ciepły podczas używania",
        },
        {
          id: "przypalenia",
          label: "Na obudowie widać czarne, przypalone ślady",
        },
        {
          id: "stara_instalacja",
          label: "Wtyczki luźno siedzą w środku (stare gniazdo bez uziemienia)",
        },
      ],
    },
  };

  const currentConfig = config[element.toLowerCase()] || config.grzejnik;
  const [inputs, setInputs] = useState({});
  const [view, setView] = useState("none");

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const updatedInputs = { ...inputs, [name]: checked };
    setInputs(updatedInputs);

    const selected = Object.keys(updatedInputs).filter(
      (key) => updatedInputs[key],
    );

    if (onSymptomsChange) {
      onSymptomsChange(selected);
    }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const selected = Object.keys(inputs).filter((key) => inputs[key]);

    if (selected.length > 0) {
      setView(selected.join("_"));
      if (onConfirm) onConfirm();
    } else {
      setView("none");
    }
  };

  return (
    <div className="check-damage">
      <h2>Zobacz filmik, jak sprawdzić czy element jest uszkodzony:</h2>

      <div className="video-container">
        {currentConfig.isYoutube ? (
          <iframe
            src={currentConfig.videoSrc}
            title={currentConfig.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame"
          ></iframe>
        ) : (
          <video
            width="640"
            height="360"
            controls
            poster={`${element}-miniatura.jpg`}
          >
            <source src={currentConfig.videoSrc} type="video/mp4" />
            Twoja przeglądarka nie obsługuje wideo.
          </video>
        )}
      </div>

      <div className="diagnosis-section">
        <h3>
          KLIKNIJ, W JAKI SPOSÓB JEST USZKODZONE:{" "}
          {currentConfig.title.toUpperCase()}
        </h3>

        <div className="checkbox-group">
          {currentConfig.options.map((option) => (
            <label key={option.id} className="checkbox-item">
              <input
                type="checkbox"
                name={option.id}
                checked={!!inputs[option.id]}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </div>

        <button className="btn-send" onClick={handleCheck}>
          Sprawdź diagnozę
        </button>
      </div>
    </div>
  );
}
