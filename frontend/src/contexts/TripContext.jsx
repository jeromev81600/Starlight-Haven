import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const TripContext = createContext();

export function TripProvider({ children }) {
  // States
  const [bivouacs, setBivouacs] = useState([]);

  const tripValue = useMemo(() => {
    return {
      bivouacs,
      setBivouacs,
    };
  }, [bivouacs]);

  return (
    <TripContext.Provider value={tripValue}>{children}</TripContext.Provider>
  );
}

TripProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TripContext;
