import "./styles/Dofinansowania.css";

export default function Dofinansowania() {
  // Rozbudowana baza danych programów regionalnych
  const regionalPrograms = [
    {
      city: "Gdańsk",
      programs: [
        { name: "Gdańska Dotacja Miejska", desc: "Dofinansowanie na likwidację ogrzewania węglowego i zmianę na ekologiczne miejskie lub gazowe." },
        { name: "Gminny Program Rewitalizacji", desc: "Wsparcie remontów i termomodernizacji budynków mieszkalnych na obszarach rewitalizowanych." }
      ]
    },
    {
      city: "Gdynia",
      programs: [
        { name: "Gdyński Program Czyste Powietrze", desc: "Dotacje celowe na wymianę starych pieców oraz podłączenie do miejskiej sieci ciepłowniczej." },
        { name: "Ciepłe Mieszkanie w Gdyni", desc: "Wsparcie wymiany okien i nieefektywnych źródeł ciepła w budynkach wielorodzinnych." }
      ]
    },
    {
      city: "Sopot",
      programs: [
        { name: "Sopoce Eko-Dotacje", desc: "Zwrot kosztów modernizacji systemów grzewczych, montażu pomp ciepła oraz kolektorów słonecznych." }
      ]
    },
    {
      city: "Warszawa",
      programs: [
        { name: "Dotacje Warszawskie - Likwidacja Kopciuchów", desc: "Wysokie dotacje na wymianę starych pieców na pompy ciepła, ogrzewanie gazowe lub podłączenie do sieci CO." },
        { name: "Warszawski Program Modernizacji Okien", desc: "Wsparcie finansowe wymiany nieszczelnej stolarki okiennej w lokalach komunalnych i prywatnych." }
      ]
    },
    {
      city: "Kraków",
      programs: [
        { name: "PONE (Program Ograniczania Niskiej Emisji)", desc: "Dofinansowanie do instalacji odnawialnych źródeł energii (OZE) oraz nowoczesnych systemów grzewczych." },
        { name: "Krakowski Program Termomodernizacji", desc: "Dotacje do docieplenia ścian i stropów w budynkach jednorodzinnych na terenie miasta." }
      ]
    },
    {
      city: "Wrocław",
      programs: [
        { name: "Program Kawka Plus", desc: "Dopłaty do wymiany pieców bezklasowych na ekologiczne źródła ciepła wraz z dopłatami do rachunków." },
        { name: "Termo Kawka", desc: "Finansowe wsparcie wymiany nieszczelnych okien towarzyszące likwidacji starego pieca." }
      ]
    },
    {
      city: "Poznań",
      programs: [
        { name: "Program Kawka Bis", desc: "Miejski program dopłat do likwidacji uciążliwych pieców węglowych i montażu OZE lub podłączenia do cieplika." },
        { name: "Poznańska Dotacja Cieplna", desc: "Dofinansowanie modernizacji systemów grzewczych w budynkach wielorodzinnych." }
      ]
    },
    {
      city: "Olsztyn",
      programs: [
        { name: "Olsztyński Program Eko-Wymiany", desc: "Lokalne dotacje na modernizację kotłowni oraz montaż nowoczesnych węzłów cieplnych." },
        { name: "Ciepłe Mieszkanie - Olsztyn", desc: "Dotacje dla właścicieli mieszkań w budynkach wielorodzinnych na wymianę okien i drzwi." }
      ]
    },
    {
      city: "Białystok",
      programs: [
        { name: "Białostocki Program Czystej Energii", desc: "Finansowanie wymiany starych źródeł ciepła na ekologiczne kotły gazowe i pompy ciepła." },
        { name: "Dotacje OZE Białystok", desc: "Wsparcie zakupu i montażu instalacji fotowoltaicznych oraz kolektorów słonecznych." }
      ]
    }
  ];

  return (
    <div className="dofinansowania-page">
      {/* Sekcja główna / Nagłówek */}
      <header className="dof-header">
        <h1>Programy Dofinansowań</h1>
        <div className="header-bar"></div>
        <p>Znajdź wsparcie finansowe na termomodernizację i wymianę źródeł ciepła w Twoim regionie.</p>
      </header>

      {/* Programy Ogólnopolskie */}
      <section className="national-section">
        <h2>Programy Ogólnopolskie</h2>
        <div className="national-card">
          <div className="card-badge">Najpopularniejszy</div>
          <h3>Czyste Powietrze</h3>
          <p>Dofinansowanie kompleksowej termomodernizacji domów oraz wymiany starych i nieefektywnych źródeł ciepła na paliwo stałe na nowoczesne źródła ciepła spełniające najwyższe normy.</p>
          <div className="card-footer-info">Dla właścicieli i współwłaścicieli domów jednorodzinnych.</div>
        </div>
      </section>

      {/* Programy Lokalne / Podział na Miasta */}
      <section className="local-section">
        <h2>Wsparcie Lokalne i Miejskie</h2>
        <div className="cities-grid">
          {regionalPrograms.map((region, idx) => (
            <div className="city-card" key={idx}>
              <div className="city-header">
                <div className="city-icon">📍</div>
                <h3>{region.city}</h3>
              </div>
              <div className="programs-list">
                {region.programs.map((prog, pIdx) => (
                  <div className="program-item" key={pIdx}>
                    <h4>{prog.name}</h4>
                    <p>{prog.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}