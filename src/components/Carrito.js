import {useContext} from "react"
import {contexto} from "./CartContext"
import {Link} from "react-router-dom"

function Carrito () {

    const {carrito, total,eliminarCarrito} = useContext(contexto) 
    return (
        <div className="carrito">
            <h1>Carrito de compras</h1>
            {
                carrito.length > 0 ?
                <ul>
                    { carrito.map(item => {
                      return <li>
                          <div>
                            <p>{item.producto.nombre}</p>
                            <p>$ {item.producto.precio}</p>
                          </div>
                            <p>{item.producto.descripcion}</p>
                            <div>
                                <p>Cantidad: {item.quantity}</p>
                                <button onClick={()=> eliminarCarrito(item.producto.id)}>Eliminar</button>
                            </div>
                        </li>
                    })}
                    <div>
                        <div>
                            <p>Total</p>
                            <p>$ {total}</p>
                        </div>
                        <p>Generar orden</p>
                        <Link to="/">
                            <p>o Continuar Comprando</p> 
                        </Link>
                    </div>
                </ul>
                :
                <div>
                     <p>No hay productos en el carrito</p>
                     <Link to="/">Volver al home</Link>

                </div>
            }
        </div>
    )  

}

export default Carrito