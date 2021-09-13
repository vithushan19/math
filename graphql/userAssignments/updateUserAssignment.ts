import { gql } from "@apollo/client";

export const UPDATE_USER_ASSIGNMENT = gql`
  mutation updateUserAssignment(
    $user_id: String
    $user_solution: jsonb
    $user_images: jsonb
    $assignment_id: String
  ) {
    update_user_assignments(
      where: {
        assignment_id: { _eq: $assignment_id }
        user_id: { _eq: $user_id }
      }
      _set: { user_solution: $user_solution, user_images: $user_images }
    ) {
      returning {
        id
        user_solution
      }
    }
  }
`;
