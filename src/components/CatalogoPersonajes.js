import React from "react";

import "../components/style/CatalogoPersonajes.css";

import { ALL_CHARACTERS } from "../GraphQL";
import { ListaPersonajes } from "../components/ListaCards";

// const grafo = ({
//   data: { characters: { results = [] } = {} },
// } = {});

const ListOfPersonCards = ({ data = [] }) => {
  console.log("fetch :>> ", data);
  return (
    <div className='Container__Personajes'>
      <ListaPersonajes {...data} />
    </div>
  );
};

export const CatalogoPersonajes = ALL_CHARACTERS(ListOfPersonCards);
