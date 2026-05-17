import DotationCard from "./DotationCard";

export default function DotationsList({ dotations }) {
  return (
    <div className="dotations-list">
      {dotations.map((d) => (
        <DotationCard key={d.id} dotation={d} />
      ))}
    </div>
  );
}
