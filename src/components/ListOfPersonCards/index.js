import React from "react";
import { PersonajesCard } from "../PersonajesCard";
import "../style/CatalogoPersonajes.css";

// const grafo = ({
//   data: { characters: { results = [] } = {} },
// } = {});

export const ListOfPersonCardsComponent = ({
  data: { characters: { results = [] } = {} } = {},
}) => {
  console.log("results :>> ", results);
  return (
    <div className='Container__Personajes'>
      {results.map((item) => (
        <div key={item.id}>
          <PersonajesCard {...item} />
        </div>
      ))}
    </div>
  );
};
