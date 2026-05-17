export default function DotationCard({ dotation }) {
  return (
    <div
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
        <span>{dotation.name}</span>
        <span style={{ color: "#2ecc71" }}>+{dotation.amount} zł</span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", margin: "5px 0 0" }}>
        {dotation.description}
      </p>
    </div>
  );
}
