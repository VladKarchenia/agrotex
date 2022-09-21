import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        name
      }
    }
  }
`;
