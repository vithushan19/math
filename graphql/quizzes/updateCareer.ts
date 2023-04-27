import { gql } from "@apollo/client";

export const UPDATE_CAREER_QUIZ_RESPONSE = gql`
  mutation UPDATE_CAREER_QUIZ_RESPONSE(
    $id: Int!
    $industries: jsonb
    $skills: jsonb
    $tasks: jsonb
  ) {
    update_career_quiz(
      where: { id: { _eq: $id } }
      _set: { industries: $industries, skills: $skills, tasks: $tasks }
    ) {
      affected_rows
    }
  }
`;
