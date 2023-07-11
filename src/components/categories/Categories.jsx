import { useState } from "react";
import CardCategory from "./card/CardCategory";
import { useQuery } from "react-query";

function Categories() {
    //const { data, error, loading } = useGetData("https://api.escuelajs.co/api/v1/categories");

    const [error, setError] = useState(false);
    const { data, isError, isLoading: loading } = useQuery('products', async () => {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const json = await res.json();
        if (json.error == "Not Found") {
            setError(true);
        }
        return json;
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
    return (
        <>
            <div>
                <div className="bg-dark text-light">
                    <h1 className="ms-5">Categorias</h1>
                </div>
                <div className="row justify-content-center">
                    {data.map((element) => {
                        return <CardCategory data={element} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Categories;