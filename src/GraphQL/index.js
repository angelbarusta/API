//import { graphql } from "react-apollo";
import gql from "graphql-tag";
//import { gql } from "apollo-boost";

const ALL_PERSONAJES = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export default ALL_PERSONAJES;
// gql`
// query allCharacters($page: Int) {
//   characters(page: $page) {
//     results {
//       id
//       name
//       image
//       status
//       species
//       gender
//       location {
//         name
//       }
//       origin {
//         name
//       }
//     }
//   }
// }
// `
