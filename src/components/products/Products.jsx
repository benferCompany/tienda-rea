import CardProduct from "./card_product/Card_product";
import useFetch from "../../hook/useFetch";
import usePagination from "../../hook/usePagination";





function Products() {
    const { startIndex, endIndex,handlePageChange,currentPage,pageSize } = usePagination();
    const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products"); 
    
    const dataCount = data ? data.length/pageSize:0; 
    return (
        <>
            <div>
                <div className="bg-dark text-light">
                    <h1 className="ms-5">Productos</h1>
                </div>
                <div className="row justify-content-center">
                    {data && data.slice(startIndex, endIndex).map((element, index) => {
                        return <CardProduct key={index} data={element} />
                    })}

                    {error && <h1>Error en la petición!</h1>}
                    {loading && <h1>Cargando....</h1>}

                    <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li onClick={() => handlePageChange(currentPage - 1, data.length)} className="page-item"><a className="page-link" href="#">Anterior</a></li>
                                <li className="page-item"><a className="page-link" href="#">{currentPage} de {dataCount.toFixed(0)}</a></li>
                                <li onClick={() => handlePageChange(currentPage + 1, data.length)} className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Products;