import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { ALL_PERSONAJES } from "../../GraphQL";

import "../style/ListaCategorias.css";

export const ListaCategorias = ({ pag }) => {
  const { loading, error, data } = useQuery(ALL_PERSONAJES, {
    variables: { pag },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map((character) => (
    <div key={character.id} className='Container__Categorias--Cartas'>
      <img src={character.image} alt='imagenPersonaje' />
    </div>
  ));
};
