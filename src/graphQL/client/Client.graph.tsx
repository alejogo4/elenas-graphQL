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
mutation CreateClientMutation($firstname: String!, $lastname: String!, $nickname: String!, $email: String!, $password: String!) {
  createClient($firstname: String!, $lastname: String!, $nickname: String!, $email: String!, $password: String!) {
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
  mutation($cellphone: String!, $password: String!) {
    login(cellphone: $cellphone, password: $password) {
      ... on AuthInfo {
        token
      }

      ... on ValidationErrors {
        message
      }
    }
  }
`;
