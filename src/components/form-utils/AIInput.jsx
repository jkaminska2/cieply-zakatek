import { useState, useEffect } from "react";
import "../../styles/form.css";

const HINTS = [
  "Np. 'kaloryfer jest zimny na dole'",
  "Np. 'wieje z okna w salonie'",
  "Np. 'na ścianie pojawiła się pleśń'",
  "Opisz problem swoimi słowami...",
];

export default function AIInput({ onSubmit }) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % HINTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (!value.trim()) return;

    onSubmit(value);
    setValue("");
  };

  return (
    <div className="input-group">
      <div className="section-card">
        <div className="section-header">✨ Pomoc AI</div>

        <div className="ai-row">
          <input
            className="input input-ai"
            placeholder={HINTS[currentPlaceholder]}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />

          <button type="button" className="btn-primary" onClick={handleSubmit}>
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
}

// const HINTS = [
//   "Opisz problem, np. 'kaloryfer jest zimny na dole'...",
//   "Np. 'uszczelka w oknie przepuszcza powietrze'...",
//   "Np. 'piec wydaje dziwne dźwięki przy starcie'...",
//   "Opisz usterkę swoimi słowami, AI pomoże...",
// ];

// export default function AIInput({ onSubmit }) {
//   const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPlaceholder((prev) => (prev + 1) % HINTS.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="input-group">
//       <div className="ai-badge">✨ AI Support</div>

//       <input
//         className="input input-ai"
//         placeholder={HINTS[currentPlaceholder]}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={() => onSubmit(value)}
//       />
//     </div>
//   );
// }
