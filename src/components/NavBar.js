import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <>
                <header className="navbar navbar-light">
                    <CartWidget/>
                    <Link to="/"><h1 className="navbar_title">Tienda de videojuegos</h1></Link>
                    <nav> 
                        <Link className="navLink" to="/categoria/pc">PC</Link>
                        <Link className="navLink" to="/categoria/playstation">Playstation</Link>
                        <Link className="navLink" to="/categoria/contacto">Contacto</Link>
                    </nav>
                </header>
        </>
    )
    
}

export default NavBar