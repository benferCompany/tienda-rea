import { useParams } from "react-router-dom";


import { useState } from "react";
import { useQuery } from "react-query";

import CardProduct from "../card_product/Card_product";

function ProductsByCategory() {
    const { id } = useParams();
    const [error, setError] = useState(false);
    const { data, isError, isLoading: loading } = useQuery('products', async () => {
        try{
            const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
            const json = await res.json();
            if (json.error == "Not Found") {
                setError(true);
            }
            return json;
        }catch(e){
            setError(false);
        }
        
    })
    
    if (loading) {
        return (<h1>Cargando....</h1>)
    }
    if (error) {
        return (
            <>
                <h1>Error en la petición!</h1>
                <p>{error}</p>
            </>
        );
    }
    if (data.length == 0 && !loading) {
        return (
            <>
                <h1>No hay datos para mostrar!</h1>
                
            </>
        );
    }
    
    return (
        <>
            <div>
                <div className="bg-dark text-light">
                    <h1 className="ms-5">Productos</h1>
                </div>
                <div className="row justify-content-center">
                    {data.map((element) => {
                        return <CardProduct data={element} />
                    })}
                </div>

            </div>
        </>
    )
}

export default ProductsByCategory;