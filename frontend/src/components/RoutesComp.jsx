import {
    Routes,
    Route,
} from "react-router-dom"

//EJEMPLO
import { useEffect } from "react";

import useLogin from '../hooks/useLogin';
import useAddPerson from '../hooks/useAddPerson';
import useAllPersons from "../hooks/useAllPersons";
import useMe from "../hooks/useMe";


const AddPerson = () => {
    const [addPerson] = useAddPerson();

    useEffect(() => {
        const agregarPersona = async() => {
            try{
                const letras = ["a","b","f","g","t","d","p","w","r","ñ","l"]
                let name = "";
                for(let i = 0; i < 10; i++){
                    let numero = Math.floor(Math.random()*letras.length)
                    name += letras[numero]
                }
                const data = await addPerson({
                    name,
                    "street": "Acllita",
                    "city": "Mi corazon",
                    "phone": "112233234"
                })
        
                console.log(data.addPerson)
            }catch {
                console.log("Fallo adPerson");
            }
            
        }
    
        agregarPersona();
    }, []); 

    return(<></>)
}

const Login = () => {
    const [login] = useLogin();
    
    useEffect(() => {
        const logear = async() => {
            try {
                const dataLogin = await login({
                    username: "root",
                    password: "secret"
                });
        
                localStorage.setItem('user-token', dataLogin.login.value);
                console.log(localStorage.getItem("user-token"));
            } catch (error) {
                console.log("Error en login");
            }
        };
    
        logear();
    }, []); 

    return(<></>)
}

const  Me = ()=> {
    const {me, loading } = useMe()
    if(loading){
        return(<></>)
    }

    console.log(me)
    return(
        <></>
    );
}

const  AllPersons = ()=> {
    const {persons, loading } = useAllPersons({
        phone: "NO"
    })
    if(loading){
        return(<></>)
    }

    console.log(persons)
    return(
        <></>
    );
}

const  RoutesComp = ()=> {
    return(
        <>
            <Routes>
                <Route path="/allPersons" element={<AllPersons/>} />
                <Route path="/me" element={<Me/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/addPerson" element={<AddPerson/>} />
            </Routes>
        </>
    );
}


export default RoutesComp