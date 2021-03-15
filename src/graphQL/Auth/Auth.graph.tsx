import { gql, ReactiveVar } from "@apollo/client";

export const LOGIN = gql`
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


