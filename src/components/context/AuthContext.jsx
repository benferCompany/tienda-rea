import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState(null);
    const [booleanAuth, setBooleanAuth] = useState(false);
    const handleAuth = (data)=>{
        
        setAuth(data);
        setBooleanAuth(true);
    }
    const data = {auth,setAuth, handleAuth,booleanAuth,setBooleanAuth};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;