import { gql } from "@apollo/client";
import { PERSON_DETAILS } from "./fragments";

export const SUBSCRIPTIONS_PERSON_ADDED = gql`
subscription SubscriptionPersonAdded {
    personAdded {
        ...PersonDetails
    }
}
${PERSON_DETAILS}
`;