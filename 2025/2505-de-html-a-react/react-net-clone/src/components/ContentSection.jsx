import * as React from "react";
import NetflixSerie from "./NetflixSerie";

const ContentSection = (props) => {
  const { title, movies } = props;
  return (
    <>
      <h1 id="home">{title}</h1>
      <div class="box">
        {movies.map((movie, index) => (
          <NetflixSerie key={index} src={movie.src} alt={movie.alt} />
        ))}
      </div>
    </>
  );
};
export default ContentSection;
