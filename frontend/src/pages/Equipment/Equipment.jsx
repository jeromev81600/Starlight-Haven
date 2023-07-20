import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AuthContext from "../../contexts/AuthContext";
import TripContext from "../../contexts/TripContext";
import "./Equipment.scss";

export default function Equipment() {
  const TripValue = useContext(TripContext);
  const userToken = useContext(AuthContext);
  const { selectedBackpackId } = TripValue;
  const [backpackData, setBackpackData] = useState([]);
  const getSelectedBackpack = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/backpackbyid/${selectedBackpackId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        setBackpackData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getSelectedBackpack();
  }, []);

  return (
    <div className="BivouacContainer">
      <Navbar />
      <section className="BivouacSection">
        <div className="BivouacTextContainer">
          <h1>Choix de vos équipements</h1>
          <p>
            Voici une liste complète d'articles à emporter dans votre sac à
            dos.Certains sont essentiels, d'autres sont superflus. Nous vous
            indiquerons ici quel type de matériel emmener en fonction de votre
            bivouac.
          </p>
        </div>
        <EquipmentCard backpackData={backpackData} />
      </section>
      <div className="ButtonContainer">
        <Link to="/home">
          <button className="HomeButton" type="button">
            <i className="pi pi-home" style={{ fontSize: "2rem" }} />
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
