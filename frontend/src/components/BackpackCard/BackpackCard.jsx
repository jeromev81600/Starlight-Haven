import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TripContext from "../../contexts/TripContext";
import "./BackpackCard.scss";

export default function BackpackCard({ backpacks }) {
  const TripValue = useContext(TripContext);
  const { selectedBackpackId, setSelectedBackpackId } = TripValue;
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setSelectedBackpackId(id);
    if (selectedBackpackId) {
      navigate("/equipment");
    }
  };

  return (
    backpacks && (
      <div className="BackpackCardContainer">
        {backpacks.map((backpack) => (
          <button
            type="button"
            className="BackpackCard"
            key={backpack.id}
            onClick={() => handleCardClick(backpack.id)}
          >
            <div className="BackpackCardTitleBox">
              <h2>{backpack.BackpackType}</h2>
            </div>
            <div className="BackpackCardContentBox">
              <p>
                <h3>Description :</h3> {backpack.description}
              </p>
              <div className="ContainerDivision">
                <div>
                  <p>
                    <h3>Volume :</h3> entre {backpack.volumemin} et{" "}
                    {backpack.volumemax} litres
                  </p>
                  <p>
                    <h3>Poids du sac :</h3> {backpack.weight} Kg
                  </p>
                  <p>
                    <h3>Charge utile :</h3> {backpack.payload} Kg
                  </p>
                </div>
                <img
                  className="imgDaypack_bag"
                  src={backpack.url}
                  alt="daypack_bag"
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    )
  );
}

BackpackCard.propTypes = {
  backpacks: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
