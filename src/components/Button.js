import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color }) => {
  const onClick = (event) => {
    console.log("click", event);
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  text: "Add",
  color: "green",
};

export default Button;
