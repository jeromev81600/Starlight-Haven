import PropTypes from "prop-types";
import "./EquipmentCard.scss";

export default function EquipmentCard({ backpackData, equipments }) {
  return (
    backpackData && (
      <div className="EquipmentCardContainer">
        <div className="EquipmentBackpackCard">
          <div className="EquipmentBackpackCardTitleBox">
            <h2>{backpackData.type}</h2>
          </div>
          <div className="EquipmentBackpackCardContentBox">
            <p>
              <h3>Description :</h3> {backpackData.description}
            </p>
            <div className="ContainerDivision">
              <div>
                <p>
                  <h3>Volume :</h3> entre {backpackData.volumemin} et{" "}
                  {backpackData.volumemax} litres
                </p>
                <p>
                  <h3>Poids du sac :</h3> {backpackData.weight} Kg
                </p>
                <p>
                  <h3>Charge utile :</h3> {backpackData.payload} Kg
                </p>
              </div>
              <img
                className="imgDaypack_bag"
                src={backpackData.url}
                alt="daypack_bag"
              />
            </div>
          </div>
        </div>
        <div className="EquipmentCard">
          {equipments.map((equipment) => (
            <div className="EquipmentCard" key={equipment.id}>
              <div className="EquipmentCardTitleBox">
                <h2>{equipment.equipmentname}</h2>
              </div>
              <div className="EquipmentCardContentBox">
                <p>
                  <h3>Type :</h3> {equipment.type}
                </p>
                <p>
                  <h3>Caractéristiques :</h3> {equipment.description}
                </p>
                <p>
                  <h3>Volume :</h3> entre {equipment.volumem} litres
                </p>
                <p>
                  <h3>Poids :</h3> {equipment.weight} Kg
                </p>
              </div>
            </div>
          ))}
        </div>
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
  equipments: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
