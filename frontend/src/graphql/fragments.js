import { gql } from "@apollo/client";

export const PERSON_DETAILS = gql`
fragment PersonDetails on Person{
    phone
    name
    id
    address {
        street
        city
    }
}
`