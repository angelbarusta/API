import React from "react";
import { Query } from "react-apollo";
import { Icon } from "semantic-ui-react";
import { ALL_CHARACTERS } from "../../GraphQL";

export const ListaPersonajes = () => {
  return (
    <>
      <Query query={ALL_CHARACTERS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.characters.results.map((character) => (
            <div key={character.id} className='Container__Personajes--Cartas'>
              <img src={character.image} alt='imagenPersonaje' />
              <h4>{character.name}</h4>
              <section className='Container__Personajes--Cartas__info'>
                <section>
                  <p>
                    <Icon name='heartbeat' />
                    {character.status}
                  </p>
                  <p>
                    <Icon name='dna' />
                    {character.species}
                  </p>
                  <p>
                    {character.gender == "Male" ? (
                      <Icon name='mars' />
                    ) : character.gender == "Female" ? (
                      <Icon name='venus' />
                    ) : (
                      <Icon name='transgender' />
                    )}
                    {character.gender}
                  </p>
                </section>
                <section>
                  <p>ID:{character.id}</p>
                  <p>
                    <Icon name='map marker alternate' />
                    {character.location.name}
                  </p>
                  <p>
                    <Icon name='flag' />
                    {character.origin.name}
                  </p>
                </section>
              </section>
            </div>
          ));
        }}
      </Query>
    </>
  );
};
