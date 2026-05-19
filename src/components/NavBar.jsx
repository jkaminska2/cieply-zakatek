import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Ciepły zakątek</h1>

        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Strona główna</Link></li>
          <li><Link to="/forum" onClick={() => setOpen(false)}>Forum</Link></li>
          <li><Link to="/dofinansowania" onClick={() => setOpen(false)}>Dofinansowania</Link></li>
        </ul>
      </nav>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
}