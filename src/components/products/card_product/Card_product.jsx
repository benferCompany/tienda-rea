import { Link } from "react-router-dom";

function CardProduct(data) {

    return (
        <>
            {
                <div className="card m-2" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={data.data.images} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Id: {data.data.id}</h5>
                        <strong className="card-text">Titulo: {data.data.title}</strong>
                        <p>{data.data.description}</p>
                        <h2>${data.data.price}</h2>
                        <Link to="#" className="btn btn-primary">Ir a producto</Link>
                    </div>
                </div>
            }

        </>


    )
}

export default CardProduct;