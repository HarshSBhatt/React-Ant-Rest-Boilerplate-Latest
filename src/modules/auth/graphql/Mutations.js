import { gql } from "@apollo/client/core";

export const SET_DUMMY_MUTATION = gql`
  mutation dummyMutation($userId: Int!) {
    dummyMutation(userId: $userId) {
      data
      statusCode
      statusMessage
    }
  }
`;
