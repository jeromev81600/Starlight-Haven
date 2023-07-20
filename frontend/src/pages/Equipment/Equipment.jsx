import { useContext, useEffect, useState } from "react";
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
  const [equipments, setEquipments] = useState([]);
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

  const getEquipments = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/equipments`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        setEquipments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getSelectedBackpack();
    getEquipments();
  }, []);

  return (
    <div className="EquipmentContainer">
      <Navbar />
      <section className="EquipmentSection">
        <div className="EquipmentTextContainer">
          <h1>Choix de vos équipements</h1>
          <p>
            Voici une liste complète d'articles à emporter dans votre sac à
            dos.Certains sont essentiels, d'autres sont superflus. Nous vous
            indiquerons ici quel type de matériel emmener en fonction de votre
            bivouac.
          </p>
        </div>
        <EquipmentCard backpackData={backpackData} equipments={equipments} />
      </section>
      <Footer />
    </div>
  );
}
