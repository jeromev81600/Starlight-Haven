import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Homecontainer">
      <Navbar />
      <div className="HomeContent">
        <section className="HomeTextSection">
          <h1>Bienvenue sur Starlight Haven !</h1>
          <h2>Le concept</h2>
          <p>
            Bienvenue sur notre site, l'assistant parfait pour tous les amoureux
            de la nature et du bivouac ! Que vous soyez un aventurier chevronné
            ou un néophyte désireux de vivre une expérience en plein air
            inoubliable, nous sommes là pour vous guider et vous aider à
            préparer votre bagage en fonction du type de bivouac que vous aurez
            choisi.
            <br />
          </p>
          <p>
            Si vous aimez dormir à la belle étoile mais que vous ne savez pas
            trop comment vous y prendre, ce site est fait pour vous !
          </p>
        </section>
        <div className="ButtonContainer">
          <Link to="bivouac">
            <button className="HomeButton" type="button">
              En avant pour l'aventure !
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
