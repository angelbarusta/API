import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import "../pages/style/Home.css";
import CatalogoPersonajes from "../components/CatalogoPersonajes";

const Home = () => {
  return (
    <div className='Container__Home'>
      <section className='Menu__Bar'>
        <button onClick={() => handleNextPage()}>Next</button>
        <button>Prev</button>
      </section>
      <section className='Data__content'>
        <CatalogoPersonajes pag={3} />
      </section>
    </div>
  );
};

export default Home;
