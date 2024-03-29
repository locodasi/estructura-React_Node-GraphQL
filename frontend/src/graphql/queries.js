import { gql } from "@apollo/client";
import { PERSON_DETAILS } from "./fragments";

export const GET_PERSONS = gql`
query AllPersons ($phone: YesNo) {
    allPersons (phone: $phone) {
        ...PersonDetails
    }
}
${PERSON_DETAILS}
`;

export const ME = gql`
query getMe {
    me {
        username
        id
        friends {
            ...PersonDetails
        }
    }
}
${PERSON_DETAILS}
`