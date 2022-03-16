import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <>
                <header className="navbar navbar-light">
                    <CartWidget/>
                    <Link to="/"><h1>Tienda de videojuegos</h1></Link>
                    <nav> 
                        <Link to="/categoria/ofertas">Ofertas</Link>
                        <Link to="/categoria/todos los juegos">Todos los juegos</Link>
                        <Link to="/categoria/contacto">Contacto</Link>
                    </nav>
                </header>
        </>
    )
    
}

export default NavBar