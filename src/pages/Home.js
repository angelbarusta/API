import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import "../pages/style/Home.css";
import CatalogoPersonajes from "../components/CatalogoPersonajes";

const pagesApi = `{
  characters{
    info{
      pages
      next
      prev
      count
    }
  }
}`;
const handleNextPage = () => {
  console.log("HOLA :>> ", pagesApi);
};
const Home = () => {
  return (
    <div className='Container__Home'>
      <section className='Menu__Bar'>
        <button onClick={() => handleNextPage()}>Next</button>
        <button>Prev</button>
      </section>
      <section className='Data__content'>
        <CatalogoPersonajes />
      </section>
    </div>
  );
};

export default Home;
