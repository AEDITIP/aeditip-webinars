import React from "react";
import NetflixLogo from "./NetflixLogo";
import ButtonNetflix from "./ButtonNetflix";

const NavBar = ({ logout }) => {
  function handleClickLogOut() {
    logout?.();
  }
  return (
    <header>
      <NetflixLogo />
      <nav class="main-nav">
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
      </nav>
      <nav class="sub-nav">
        <a href="#">
          <i class="fas fa-search sub-nav-logo"></i>
        </a>
        <a href="#">
          <i class="fas fa-bell sub-nav-logo"></i>
        </a>

        <a href="#">Account</a>
      </nav>
      <ButtonNetflix label={"Log out"} onClick={handleClickLogOut} />
    </header>
  );
};
export default NavBar;
