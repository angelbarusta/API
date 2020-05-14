import React from "react";
import { gql, graphql } from "graphql-tag";

import "../components/style/CatalogoPersonajes.css";

import { ALL_CHARACTERS } from "../GraphQL";
import { ListaPersonajes } from "../components/ListaCards";

const ListOfPersonCards = ({
  data: { characters: { results = [] } = {} },
} = {}) => {
  console.log("results :>> ", results);
  return (
    <div className='Container__Personajes'>
      <ListaPersonajes results={results} />
    </div>
  );
};

export const CatalogoPersonajes = ALL_CHARACTERS(ListOfPersonCards);
