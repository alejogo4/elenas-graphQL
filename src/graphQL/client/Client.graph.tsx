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
