import React from "react";

import "../components/style/CatalogoPersonajes.css";

import { ListaPersonajes } from "../components/ListaCards";

export const CatalogoPersonajes = ({ pag }) => {
  console.log("fetch_CatalogoPersonajes :>> ", pag);
  return (
    <div className='Container__Personajes'>
      <ListaPersonajes pag={pag} />
    </div>
  );
};
