import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Cards from "./Cards.jsx";
import propiedades from "./assets/propiedades.js";
export default function App() {
  const cards = propiedades.map(item => {
    return <Cards item={item} />;
  });
  return (
    <main>
      <Navbar />
      <Header />
      {cards}
    </main>
  );
}
