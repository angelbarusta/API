import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
// import { graphql } from "graphql-tag";

export const ALL_CHARACTERS = graphql(
  gql`
    query allCharacters($page: Int!) {
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
  `
);
