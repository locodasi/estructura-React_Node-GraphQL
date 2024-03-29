import { useMutation } from "@apollo/client";

import { CREATE_PERSON } from "../graphql/mutations";

const useAddPerson = () => {
    const [mutate, result] = useMutation(CREATE_PERSON);

    const addPerson = async (variables) => {
        const { data } = await mutate({variables})
        return data;
    };

    return [addPerson, result];
};

export default useAddPerson;