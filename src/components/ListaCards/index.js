import React from "react";
// import { Query } from "react-apollo";
import { Icon } from "semantic-ui-react";

export const ListaPersonajes = ({
  image,
  id,
  status,
  origin,
  gender,
  name,
  species,
  location,
}) => {
  // console.log("data", characters);
  return (
    <div className='Container__Personajes--Cartas'>
      <img src={image} alt='imagenPersonaje' />
      <h4>{name}</h4>
      <section className='Container__Personajes--Cartas__info'>
        <section>
          <p>
            <Icon name='heartbeat' />
            {status}
          </p>
          <p>
            <Icon name='dna' />
            {species}
          </p>
          <p>
            {gender == "Male" ? (
              <Icon name='mars' />
            ) : gender == "Female" ? (
              <Icon name='venus' />
            ) : (
              <Icon name='transgender' />
            )}
            {gender}
          </p>
        </section>
        <section>
          <p>ID:{id}</p>
          <p>
            <Icon name='map marker alternate' />
            {location.name}
          </p>
          <p>
            <Icon name='flag' />
            {origin.name}
          </p>
        </section>
      </section>
    </div>
  );
};
