import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Form from "./components/Form";
import ElementWindow from "./components/ElementWindow";

export default function App() {
  return (
    <div class="app">
      <h1>Ogrzej swój kąt!</h1>
      <ElementWindow element={"grzejnik"}></ElementWindow>
    </div>
  );
}
