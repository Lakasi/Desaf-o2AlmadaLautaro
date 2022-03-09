import CartWidget from "./CartWidget"

function NavBar(){
    return (
        <>
                <div className="navbar navbar-light">
                    <a className="navbar-brand" href="#">
                        <CartWidget/>
                    </a>
                    <h1>Tienda de videojuegos</h1>
                    <nav> 
                        <a href="">Ofertas</a>
                        <a href="">Todos los juegos</a>
                        <a href="">Contacto</a>
                    </nav>
                </div>
        </>
    )
    
}

export default NavBar