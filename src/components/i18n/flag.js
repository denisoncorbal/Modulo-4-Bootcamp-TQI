import React from "react";

const Flag = ({ image, isSelected, ...props }) => (
  <img
    alt="flag"
    src={image}
    className={isSelected ? "flag selected" : "flag"}
    width="5%"
    height="5%"
    {...props}
  />
);

export default Flag;
