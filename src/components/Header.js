import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <hearder>
      <h1> {title}</h1>
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

export default Header;
