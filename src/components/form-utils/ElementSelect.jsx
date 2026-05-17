const ELEMENTS = [
  "Kaloryfer",
  "Okno",
  "Ściany",
  "Sufit",
  "Podłoga",
  "Piec",
  "Gniazdka",
  "Inne",
];

export default function ElementSelect({ value, onChange }) {
  return (
    <select className="input" value={value} onChange={onChange}>
      {ELEMENTS.map((element) => (
        <option key={element} value={element.toLowerCase()}>
          {element}
        </option>
      ))}
    </select>
  );
}
