
import {
    Link,
} from "react-router-dom"

//EJEMPLO
const  Navigator = ()=> {
    return(
        <>
            <Link to="/allPersons">allPersons</Link>
            <Link to="/me">me</Link>
            <Link to="/login">login</Link>
            <Link to="/addPerson">addPerson</Link>
        </>
    );
}

export default Navigator