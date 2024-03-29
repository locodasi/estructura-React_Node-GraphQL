import { ME } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useMe = (variables) => {

    const {data, loading, error} = useQuery(ME, {
        variables
    })



    let me = (loading || error) ? [] : data.me
    return {me, loading, error}
    //    return {contacts, loading, fetchMore: handleFetchMore,}

};

export default useMe;