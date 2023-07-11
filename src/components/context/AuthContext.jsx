import { createContext, useState } from "react";

const AuthContext = createContext();
const initialAuth = null;
const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState(initialAuth);
    const handleAuth = (e)=>{
        if(auth){
            setAuth(null)
        }else{
            setAuth(true);
        }
    }
    const data = {auth, handleAuth};

    return <AuthProvider.Provider value={data}>{children}</AuthProvider.Provider>
}

export {AuthProvider};
export default AuthContext;