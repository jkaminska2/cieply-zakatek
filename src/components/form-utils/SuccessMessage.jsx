export default function SuccessMessage({ specialistName, onReset }) {
  return (
    <div className="card success-message">
      <h2>Sukces!</h2>
      <p>Twoje zapytanie dotyczące modernizacji zostało wysłane.</p>
      <p>
        Specjalista <strong>{specialistName}</strong> skontaktuje się z Tobą w
        ciągu 24h.
      </p>
      <button className="btn" onClick={onReset}>
        Wróć do formularza
      </button>
    </div>
  );
}
