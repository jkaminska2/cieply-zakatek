export default function SpecialistSelect({ specialists, onChange }) {
  return (
    <select className="input" onChange={onChange}>
      <option value="">Wybierz specjalistę</option>
      {specialists.map((s) => (
        <option key={s.id} value={s.id}>
          {s.name} - {s.ratePerHour} zł/h
        </option>
      ))}
    </select>
  );
}
