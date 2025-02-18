import { gql } from "@apollo/client";

export const INSERT_CODING_QUIZ_RESPONSE = gql`
  mutation INSERT_CODING_QUIZ_RESPONSE($objects: [coding_quiz_insert_input!]!) {
    insert_coding_quiz(objects: $objects) {
      returning {
        name
        result
        email
      }
    }
  }
`;
