import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Dofinansowania from "./pages/Dofinansowania";

import "./App.css";

export default function App() {
  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/dofinansowania" element={<Dofinansowania />} />
      </Routes>
    </div>
  );
}