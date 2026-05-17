import DotationsList from "./DotationsList";

export default function CostSummary({ cost, dotations }) {
  return (
    <div className="result">
      <h1>Szacowany koszt: {cost} zł</h1>

      <h2 style={{ marginTop: "20px" }}>Dostępne programy wsparcia:</h2>

      <DotationsList dotations={dotations} />

      <p
        className="hint"
        style={{ fontSize: "0.75rem", color: "#999", marginTop: "15px" }}
      >
        * Kwoty dotacji zależą od progu dochodowego i zakresu prac.
      </p>
    </div>
  );
}
