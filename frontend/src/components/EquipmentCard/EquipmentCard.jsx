import React, { useState } from "react";
import PropTypes from "prop-types";
import "./EquipmentCard.scss";

export default function EquipmentCard({ backpackData, equipments }) {
  // Utilise un tableau d'états pour garder une trace de l'état de chaque équipement
  const [sectionHovered, setSectionHovered] = useState(
    Array(equipments.length).fill(false)
  );

  // Fonction qui permet de basculer l'état d'un équipement au survol, repasse tous les autres à false lorsqu'on passe un élément à true (évite les bugs)
  const toggleSection = (index) => {
    const newSectionHovered = Array(equipments.length).fill(false);
    newSectionHovered[index] = true;
    setSectionHovered(newSectionHovered);
  };

  // Fonction qui permet de repasser l'état d'un élément à false au click lorsque celui-ci est ouvert
  const closeSection = (index) => {
    const newSectionHovered = [...sectionHovered];
    newSectionHovered[index] = false;
    setSectionHovered(newSectionHovered);
  };

  // Fonction qui permet de repasser l'état de tous les éléments à false en cliquant à côté.
  const resetSections = () => {
    setSectionHovered(Array(equipments.length).fill(false));
  };

  // Gestionnaire d'événement clavier
  const handleKeyDown = (event) => {
    // Si la touche "Escape" est pressée, réinitialiser les sections
    if (event.key === "Escape") {
      resetSections();
    }
  };

  return (
    backpackData && (
      <div
        role="button"
        tabIndex={0}
        className="EquipmentCardContainer"
        onClick={resetSections}
        onKeyDown={handleKeyDown}
      >
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
        <div className="EquipmentCards">
          {equipments.map((equipment, index) => (
            <div
              role="button"
              tabIndex={-1}
              className="EquipmentCard"
              key={equipment.id}
              onClick={() => closeSection(index)}
              onMouseEnter={() => toggleSection(index)}
              onMouseLeave={() => toggleSection(index)}
              onKeyDown={handleKeyDown}
            >
              <div className="EquipmentCardTitleBox">
                <h2>{equipment.equipmentname}</h2>
              </div>
              <div
                className={`EquipmentCardContentBox ${
                  sectionHovered[index]
                    ? "CardContent-show"
                    : "CardContent-hide"
                }`}
              >
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
