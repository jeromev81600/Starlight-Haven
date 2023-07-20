import PropTypes from "prop-types";
import "./EquipmentCard.scss";

export default function EquipmentCard({ backpackData }) {
  return (
    backpackData && (
      <div className="EquipmentCardContainer">
        {backpackData.map((backpack) => (
          <div className="EquipmentCard" key={backpack.id}>
            <div className="EquipmentCardTitleBox">
              <h2>{backpack.BackpackType}</h2>
            </div>
            <div className="EquipmentCardContentBox">
              <p>
                <h3>Description :</h3> {backpack.description}
              </p>
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
          </div>
        ))}
      </div>
    )
  );
}

EquipmentCard.propTypes = {
  backpackData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
