import "../styles/NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Ciepły zakątek</h2>

      <ul className="nav-links">
        <li><a href="#">Strona główna</a></li>
        <li><a href="#">Forum</a></li>
        <li><a href="#">Fundacje</a></li>
        <li><a href="#">Dofinansowania</a></li>
      </ul>
    </nav>
  );
}