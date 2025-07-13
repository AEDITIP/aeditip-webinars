import * as React from "react";
import NavBar from "./NavBar";
import ContentSectionContainer from "./ContentSectionContainer";
import Footer from "./Footer";
import "../styles/netflix-styles.css";

const NetflixMainAppContainer = ({logout}) => {
  return (
    <div class="wrapper">
      <NavBar logout={logout}/>
      <ContentSectionContainer />
      <Footer />
    </div>
  );
};
export default NetflixMainAppContainer;
