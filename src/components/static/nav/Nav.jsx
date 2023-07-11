import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/categories">Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search &#128269;</a>
                        </li>
                        <li className="nav-item position-absolute bottom-0 end-0">
                            <Link className="nav-link" to="/login"><span className="d-flex"><p className="h3">&#128100;</p></span></Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;