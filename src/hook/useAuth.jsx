import { useContext } from "react"
import AuthContext from "../components/context/AuthContext"

const useAuth = ()=>{
    const {auth,setAuth, handleAuth, booleanAuth, setBooleanAuth} = useContext(AuthContext);

    return {auth,setAuth, handleAuth,booleanAuth,setBooleanAuth};

}

export default useAuth;