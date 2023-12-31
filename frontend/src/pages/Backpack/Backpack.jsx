import { useContext, useEffect } from "react";
import axios from "axios";
import BackpackCard from "../../components/BackpackCard/BackpackCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AuthContext from "../../contexts/AuthContext";
import TripContext from "../../contexts/TripContext";
import "./Backpack.scss";

export default function Backpack() {
  const TripValue = useContext(TripContext);
  const userToken = useContext(AuthContext);
  const { selectedBivouacId, backpacks, setBackpacks } = TripValue;
  const getBackpacksByBivouac = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/backpacks/${selectedBivouacId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        setBackpacks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getBackpacksByBivouac();
  }, []);

  return (
    <div className="BackpackContainer">
      <Navbar />
      <section className="BackpackSection">
        <div className="BackpackTextContainer">
          <h1>Choix du Sac à dos</h1>
          <p>
            Félicitations, vous avez choisi votre type de bivouac; vous allez
            maitenant pouvoir sélectionner un sac adapté à votre séjour.
          </p>
          <p className="animate-charcter">
            Cliquez sur le type de sac à dos que vous souhaitez utiliser
          </p>
        </div>
        <BackpackCard backpacks={backpacks} />
      </section>
      <Footer />
    </div>
  );
}
