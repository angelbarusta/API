import React from "react";

import "../components/style/CatalogoPersonajes.css";

import { ListaPersonajes } from "../components/ListaCards";
import { ListaCategorias } from "../components/ListaCategorias";

const CatalogoPersonajes = ({ pag }) => {
  console.log("fetch_CatalogoPersonajes :>> ", pag);
  return (
    <>
      <div className='Container__Personajes'>
        <ListaPersonajes pag={pag} />
      </div>
      <div className='Container__Personajes'>
        <ListaCategorias pag={pag} />
      </div>
    </>
  );
};
export default CatalogoPersonajes;
