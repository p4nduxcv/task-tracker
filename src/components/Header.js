import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClicker = (e) => {
    console.log(e);
  };
  return (
    <hearder className="header">
      <h1 style={headerStyling}> {title}</h1>
      <Button color="green" text="Add" onClick={onClicker}></Button>
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
