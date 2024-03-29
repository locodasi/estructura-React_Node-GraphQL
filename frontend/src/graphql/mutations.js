import { gql } from "@apollo/client";
import { PERSON_DETAILS } from "./fragments";

export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            value
        }
    }
`;

export const CREATE_PERSON = gql`
mutation AddPerson($name: String!, $street: String!, $city: String!, $phone: String) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
        ...PersonDetails
    }
}
${PERSON_DETAILS}
`;
