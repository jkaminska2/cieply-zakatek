export default function ModernizationList({ elements, onRemove }) {
  return (
    <div className="list">
      {elements.map((elem, i) => (
        <div key={i} className="list-item">
          <span>{elem}</span>
          <button type="button" className="btn" onClick={() => onRemove(i)}>
            Usuń
          </button>
        </div>
      ))}
    </div>
  );
}
