import React from "react";
import "../pages/style/Home.css";
import { CatalogoPersonajes } from "../containers/CatalogoPersonajes";

const Home = () => {
  return (
    <div className='Container__Home'>
      <section className='Menu__Bar'>
        <button onClick={() => handleNextPage()}>Next</button>
        <button>Prev</button>
      </section>
      <section className='Data__content'>
        <CatalogoPersonajes pag={6} />
      </section>
    </div>
  );
};

export default Home;
