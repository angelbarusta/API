// import { gql } from "apollo-boost";
import { gql, graphql } from "graphql-tag";
//import { graphql } from "react-apollo";

export const ALL_CHARACTERS = gql`
  query allCharacters($page: Int) {
    characters(page: $page) {
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
`;
