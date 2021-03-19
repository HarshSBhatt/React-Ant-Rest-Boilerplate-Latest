import { gql } from "@apollo/client/core";

// eslint-disable-next-line import/prefer-default-export
export const DUMMY_SUBSCRIPTION = gql`
  subscription dummySubscription($userId: Int!) {
    dummySubscription(userId: $userId) {
      data
      statusCode
      statusMessage
    }
  }
`;
