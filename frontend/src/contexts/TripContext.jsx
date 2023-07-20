import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const TripContext = createContext();

export function TripProvider({ children }) {
  // States
  const [bivouacs, setBivouacs] = useState([]);
  const [backpacks, setBackpacks] = useState([]);
  const [selectedBivouacId, setSelectedBivouacId] = useState(null);
  const [selectedBackpackId, setSelectedBackpackId] = useState(null);

  const tripValue = useMemo(() => {
    return {
      bivouacs,
      setBivouacs,
      selectedBivouacId,
      setSelectedBivouacId,
      backpacks,
      setBackpacks,
      selectedBackpackId,
      setSelectedBackpackId,
    };
  }, [bivouacs, selectedBivouacId, backpacks, selectedBackpackId]);

  return (
    <TripContext.Provider value={tripValue}>{children}</TripContext.Provider>
  );
}

TripProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TripContext;
