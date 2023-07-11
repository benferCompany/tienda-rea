import { useState } from "react";
import { isError, useQuery } from "react-query";

function Login(){
    const [error, setError] = useState(false);
    const data = useQuery('products', async ()=>{
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const json = await res.json();
        
        
        
        return json;
    })
    console.log(data)
    return(
        <h1>Hello Login</h1>
    )
}

export default Login;