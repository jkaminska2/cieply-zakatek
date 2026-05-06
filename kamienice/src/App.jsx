import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Form from "./components/Form";
import ElementWindow from "./components/ElementWindow";

export default function App() {
  return (
    <div className="main">
      <h1 className="haslo">Ciepły zakątek</h1>
      <div className="app">
        <div className="model"></div>
        <ElementWindow className="pop" element={"grzejnik"}></ElementWindow>
      </div>
    </div>
  );
}
