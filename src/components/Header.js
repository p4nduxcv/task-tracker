import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <hearder className="header">
      <h1 style={headerStyling}> {title}</h1>
      <button className="btn">Add</button>
    </hearder>
  );
};

// this will be set up as default value
Header.defaultProps = {
  title: "Takas Bakas",
};

// set props type
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//styling objects JS
const headerStyling = {
  color: "black",
};
export default Header;
