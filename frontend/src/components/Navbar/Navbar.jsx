import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logotente from "../../assets/Icons/Logotente.png";
import TitleStar from "../../assets/img/TitleStar.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="NavbarContainer">
      <div className="NavbarTitleAndLogo">
        <img src={Logotente} alt="logo" />
        <img src={TitleStar} alt="TitleStar" />
      </div>
      <div className="MenuBurger">
        <ul className={`navbarpoppins ${isMenuOpen ? "open" : ""}`}>
          <div className="link">
            <li className="navbar-link">
              <Link to="/home">Accueil</Link>
            </li>
            <li className="navbar-link">
              <Link to="/bivouac">Bivouacs</Link>
            </li>
            <li className="navbar-link">
              <Link to="/about">A propos</Link>
            </li>
            <li className="navbar-link">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </ul>

        <button role="button" className="burger-menu" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "open" : ""}`} />
          <span className={`bar ${isMenuOpen ? "open" : ""}`} />
          <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        </button>
        <div className="NavbarLinks" />
      </div>
    </div>
  );
}
