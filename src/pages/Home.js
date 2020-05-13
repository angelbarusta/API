import React from "react";

import "../pages/style/Home.css";
import CatalogoPersonajes from "../components/CatalogoPersonajes";

const Home = () => {
  return (
    <div className='Container__Home'>
      <section className='Menu__Bar'>bar</section>
      <section className='Data__content'>
        <CatalogoPersonajes />
      </section>
    </div>
  );
};

export default Home;
