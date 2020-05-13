import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const characters = `{
    characters{
      results{
        id
        name
      }
    }
  }`;

const CharactersQuery = () => {
  return (
    <Query
      query={gql`
        ${characters}
      `}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.characters.results.map((character) => (
          <div key={character.id}>
            <p>
              {character.name}: {character.origin}
            </p>
          </div>
        ));
      }}
    </Query>
  );
};

export default CharactersQuery;
