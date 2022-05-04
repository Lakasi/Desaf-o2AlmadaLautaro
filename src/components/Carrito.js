import {useContext} from "react"
import {contexto} from "./CartContext"
import {Link} from "react-router-dom"

function Carrito () {

    const {carrito, total, borrarCarrito} = useContext(contexto) 
    return (
        <div className="carrito">
            <h1 className="carrito_title">Carrito de compras</h1>
            {
                carrito.length > 0 ?
                <ul>
                    { carrito.map((item, index) => {
                      return( 
                        <li className="cart_li" key={index} >
                            <div className="cart_li_top">
                                <h1 className="cart_title">{item.producto.nombre}</h1>    
                                <h1 className="cart_price">$ {item.producto.precio}</h1>
                            </div>
                            <h4>Consola: {item.producto.consola}</h4>
                            <div className="cart_li_bottom">
                                <h4 className="cart_canditad">Cantidad: {item.cantidad}</h4>
                                <button onClick={()=> borrarCarrito(item.producto.id)}>Eliminar</button>
                            </div>
                        </li>
                    )
                    })}
                    <div>
                        <div className="totalCart">
                            <h1>Total</h1>
                            <h1>$ {total}</h1>
                        </div>
                        <button>Generar orden</button>
                        <Link to="/">
                            <button>o Continuar Comprando</button> 
                        </Link>
                    </div>
                </ul>
                :
                <div>
                     <p className="noItemInCart">No hay productos en el carrito</p>
                     <Link to="/" ><p className="backHome">Volver al home</p></Link>

                </div>
            }
        </div>
    )  

}

export default Carrito