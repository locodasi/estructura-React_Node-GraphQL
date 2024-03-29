import { GET_PERSONS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAllPersons = (variables) => {

    const {data, loading, error} = useQuery(GET_PERSONS, {
        variables
    })



    let persons = (loading || error) ? [] : data.allPersons
    return {persons, loading, error}
    //    return {contacts, loading, fetchMore: handleFetchMore,}

};

export default useAllPersons;