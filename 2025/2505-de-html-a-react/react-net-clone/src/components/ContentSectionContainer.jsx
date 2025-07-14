import * as React from "react";
import ContentSection from "./ContentSection";
import { fakeGETListOfMovies } from "../fakeDB/FakeBD";

const ContentSectionContainer = (props) => {
  const [listOfSections, setListOfSections] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getListOfMovies = async () => {
    setIsLoading(true);
    const resultado = await fakeGETListOfMovies();
    setListOfSections(resultado);
    setIsLoading(false);
  };
  React.useEffect(() => {
    getListOfMovies();
  }, []);
  if (isLoading)
    return (
      <section class="main-container">
        <p>Cargando...</p>
      </section>
    );
  else
    return (
      <section class="main-container">
        {listOfSections.length == 0 && <h2>No se encontró respuesta</h2>}
        {listOfSections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.sectionName}
            movies={section.movies}
          />
        ))}

        {/*
      <h1 id="myList">Trending Now</h1>
      <div class="box">
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true"
            ,alt:""
          />
        </a>
      </div>

      <h1 id="tvShows">TV Shows</h1>
      <div class="box">
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true"
            ,alt:""
          />
        </a>

        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv7.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv8.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv9.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv10.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true"
            ,alt:""
          />
        </a>
      </div> 

     <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div class="box">
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true"
            ,alt:""
          />
        </a>
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div class="box">
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true"
            ,alt:""
          />
        </a>
        <a href="">
          <img
            src:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true"
            ,alt:""
          />
        </a>
      </div> */}
      </section>
    );
};
export default ContentSectionContainer;
