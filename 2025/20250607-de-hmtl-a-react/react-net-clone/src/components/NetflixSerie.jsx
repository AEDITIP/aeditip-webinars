import * as React from "react";
import "../styles/image-card.css";

const NetflixSerie = (props) => {
  return (
    <a key={props.index} href="https://www.netflix.com/pe/">
      <img src={props.src} alt={props.alt} />
    </a>
  );
};
export default NetflixSerie;
