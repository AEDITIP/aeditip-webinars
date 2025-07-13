import * as React from "react";
import "../styles/button-netflix.css";
const ButtonNetflix = ({ label, onClick }) => {
  const manejadorDeClick = () => {
    onClick?.();
  };
  return (
    <button className="sign-in" onClick={manejadorDeClick}>
      {label}
    </button>
  );
};
export default ButtonNetflix;
