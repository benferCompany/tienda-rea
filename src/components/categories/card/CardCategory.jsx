import { Link } from "react-router-dom";

function CardCategory(data) {

    return (
        <>
            {
                <div className="card m-2" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={data.data.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Id: {data.data.id}</h5>
                        <strong className="card-text">Categoria: {data.data.name}</strong>
                        <Link to={`/categories/${data.data.id}/products`} className="btn btn-primary">Ir a categoria</Link>
                    </div>
                </div>
            } 

        </>


    )
}

export default CardCategory;