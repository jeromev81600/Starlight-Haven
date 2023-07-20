// import { Link } from "react-router-dom";
import "./Navbar.scss";
// eslint-disable-next-line import/no-unresolved
import Logotente from "../../assets/icons/Logotente.png";
import TitleStar from "../../assets/img/TitleStar.png";

export default function Navbar() {
  return (
    <div className="NavbarContainer">
      <img src={Logotente} alt="logo" />
      <img src={TitleStar} alt="TitleStar" />
      <div className="NavbarLinks" />
    </div>
  );
}
