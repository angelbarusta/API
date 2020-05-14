import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

export const ALL_CHARACTERS = gql`
  query allCharacters {
    characters {
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
