import { gql } from "@apollo/client";

export const LIST = gql`
  {
    clientsSearch {
      results {
        id
        registerDate
        firstName
        lastName
        cedula
        address
        city
        cellphone
        state {
          id
          shortCode
          displayName
          name
        }
        credit
      }
    }
  }
`;

export const CREATE = gql`
  mutation CreateClientMutation($createClientInput: ClientInput!) {
    createClient(input: $createClientInput) {
      ... on Client {
        id
        registerDate
        firstName
        lastName
        cedula
        address
        city
      }
    }
  }
`;

export const EDIT = gql`
  mutation UpdateClientMutation(
    $updateClientId: Int!
    $updateClientInput: ClientInput!
  ) {
    updateClient(id: $updateClientId, input: $updateClientInput) {
      ... on ValidationErrors {
        message
        errors {
          message
        }
      }
    }
  }
`;
