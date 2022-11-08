import { gql } from "@apollo/client";

// updates goal with new values in $objects if existing id is provided; inserts new goal if no ID provided
// userId in objects must exist in users table; if id is provided, it must exist in goals table

//question on how you decide what information to upsert -- which columns?
export const UPSERT_USER_CODING_ASSIGNMENTS = gql`
  mutation upsertUserCodingAssignments(
    $objects: [user_assignment_submissions_insert_input!]!
  ) {
    insert_user_assignment_submissions(
      objects: $objects
      on_conflict: {
        constraint: user_assignment_submissions_pkey
        update_columns: [submission_link]
      }
    ) {
      affected_rows
      returning {
        user_id
        submission_link
      }
    }
  }
`;
