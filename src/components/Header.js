import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <hearder className="header">
      <h1 style={headerStyling}> {title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
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
