import { useState } from "react";
import "../styles/NavBar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Ciepły zakątek</h2>

        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#">Strona główna</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Fundacje</a></li>
          <li><a href="#">Dofinansowania</a></li>
        </ul>
      </nav>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
}