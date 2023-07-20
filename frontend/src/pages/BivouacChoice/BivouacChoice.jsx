import { useContext, useEffect } from "react";
import axios from "axios";
import BivouacCard from "../../components/BivouacCard/BivouacCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AuthContext from "../../contexts/AuthContext";
import TripContext from "../../contexts/TripContext";
import "./BivouacChoice.scss";

export default function BivouacChoice() {
  const TripValue = useContext(TripContext);
  const userToken = useContext(AuthContext);
  const { setBivouacs, bivouacs } = TripValue;
  const getBivouacs = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/bivouacs`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        setBivouacs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getBivouacs();
  }, []);

  return (
    <div className="BivouacContainer">
      <Navbar />
      <section className="BivouacSection">
        <div className="BivouacTextContainer">
          <h1>Choix du Bivouac</h1>
          <p>
            Voici une gamme de bivouacs pour que vous puissiez choisir celle qui
            correspond le mieux à vos envies et à votre niveau de confort. Que
            ce soit une randonnée en montagne, un séjour au bord d'un lac
            paisible ou une nuit sous les étoiles dans une vaste forêt, nous
            avons des conseils et des recommandations adaptés à chaque
            situation.
          </p>
          <p className="animate-charcter">
            Cliquez sur le type de bivouac que vous souhaitez effectuer
          </p>
        </div>
        <BivouacCard bivouacs={bivouacs} />
      </section>
      <Footer />
    </div>
  );
}
