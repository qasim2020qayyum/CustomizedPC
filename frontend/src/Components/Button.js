import React from "react";
import "./Button.css";
const Style = ["btn-primary", "btn-primary"];
const size = ["btn-m-primary", "btn-lg-primary"];
export const Button = (type, onClick, buttonstyle, buttonsize) => {
  const checkButtonStyle = Style.includes(buttonstyle) ? buttonstyle : Style[0];
  const checkButtonSize = size.includes(buttonsize) ? buttonsize : size[0];
  return (
    <Button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    ></Button>
  );
};
