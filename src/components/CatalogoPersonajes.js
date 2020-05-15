import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import "../components/style/CatalogoPersonajes.css";

// import { ALL_CHARACTERS } from "../GraphQL";
import { ListaPersonajes } from "../components/ListaCards";
// import { PersonCard } from "../components/PersonCard";

// const grafo = ({
//   data: { characters: { results = [] } = {} },
// } = {});

const whitPerson = graphql(gql`
  query allCharacters($pag: Int) {
    characters(page: $pag) {
      results {
        id
        name
        image
        status
        species
        gender
        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`);

const ListOfPersonCardsComponent = ({
  data: { characters: { results = [] } = {} } = {},
}) => {
  console.log("results :>> ", results);
  return (
    <ul className='Container__Personajes'>
      {/* <ListaPersonajes {...data} /> */}
      {results.map((item) => (
        <ListaPersonajes key={item.id} {...item} />
      ))}
    </ul>
  );
};

export const CatalogoPersonajes = whitPerson(ListOfPersonCardsComponent);
