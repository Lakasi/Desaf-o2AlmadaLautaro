import {useContext} from "react"
import {contexto} from "./CartContext"
import {Link} from "react-router-dom"

function Carrito () {

    const {carrito, total, borrarCarrito, limpiarCarrito} = useContext(contexto) 
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
                                <p className="cart_title">{item.producto.nombre}</p>    
                                <p className="cart_price">$ {item.producto.precio}</p>
                            </div>
                            <p>Consola: {item.producto.consola}</p>
                            <div className="cart_li_bottom">
                                {/* <img className="cart_img" src={item.producto.img} alt="" /> */}
                                <p className="cart_canditad">Cantidad: {item.cantidad}</p>
                                <button onClick={()=> borrarCarrito(item.producto.id)}>Eliminar</button>
                            </div>
                        </li>
                    )
                    })}
                    <div>
                        <div>
                            <p>Total</p>
                            <p>$ {total}</p>
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