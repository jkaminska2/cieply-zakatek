import "../styles/ElementWindow.css";
import CheckDamage from "./CheckDamage";
import DoAlone from "./DoAlone";

export default function ElementWindow({ element }) {
  return (
    <div className="element">
      <h1>{element}</h1>
      <CheckDamage></CheckDamage>
      <DoAlone element={element}></DoAlone>
      <div className="question-box">Do czego potrzebujesz specjalisty?</div>
    </div>
  );
}
