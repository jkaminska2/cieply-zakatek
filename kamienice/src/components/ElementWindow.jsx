import "../styles/ElementWindow.css";
import DoAlone from "./DoAlone";

export default function ElementWindow({ element }) {
  return (
    <div className="element">
      <h1>{element}</h1>
      <div className="question-box">Jak sprawdzić czy element jest uszkodzony?</div>
      <DoAlone element={element}></DoAlone>
      <div className="question-box">Do czego potrzebujesz specjalisty?</div>
    </div>
  );
}
