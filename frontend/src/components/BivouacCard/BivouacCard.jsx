import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TripContext from "../../contexts/TripContext";
import "./BivouacCard.scss";

export default function BivouacCard({ bivouacs }) {
  const TripValue = useContext(TripContext);
  const { selectedBivouacId, setSelectedBivouacId } = TripValue;
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setSelectedBivouacId(id);
    if (selectedBivouacId) {
      navigate("/backpack");
    }
  };

  return (
    bivouacs && (
      <div className="BivouacCardContainer">
        {bivouacs.map((bivouac) => (
          <button
            type="button"
            className="BivouacCard"
            key={bivouac.id}
            onClick={() => handleCardClick(bivouac.id)}
          >
            <div className="BivouacCardTitleBox">
              <h2>{bivouac.type}</h2>
            </div>
            <div className="BivouacCardContentBox">
              <p>
                <h3>Conditions optimales :</h3>
                {bivouac.OptimalWeatherConditions}
              </p>
              <p>
                <h3>Informations :</h3> {bivouac.description}
              </p>
              <p>
                <h3>Situation :</h3> {bivouac.location}
              </p>
              <p>
                <h3>Périodes optimales:</h3> {bivouac.optimal_periods}
              </p>
            </div>
          </button>
        ))}
      </div>
    )
  );
}

BivouacCard.propTypes = {
  bivouacs: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
