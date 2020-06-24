import React from "react";

import "../pages/style/Home.css";
import CatalogoPersonajes from "../components/CatalogoPersonajes";

const URL_API = "https://rickandmortyapi.com/api/character/";

const Home = () => {
  return (
    <div className='Container__Home'>
      <section className='Menu__Bar'>bar</section>
      <section className='Data__content'>
        <CatalogoPersonajes url={URL_API} />
      </section>
    </div>
  );
};

export default Home;
