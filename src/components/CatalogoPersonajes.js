import React from "react";

import "../components/style/CatalogoPersonajes.css";

import { ListaPersonajes } from "../components/ListaCards";

export const CatalogoPersonajes = ({ page = 1 }) => {
  console.log("fetch :>> ", page);
  return (
    <div className='Container__Personajes'>
      <ListaPersonajes {...page} />
    </div>
  );
};
