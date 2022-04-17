import { contexto } from "./CartContext"
import {useContext} from "react"
import ItemCount from "./ItemCount"

function ItemDetail({producto}){ 

    const {agregarCarrito} = useContext(contexto)
    
    const onAdd = (unidadSeleccionada)=>{
        agregarCarrito(producto, unidadSeleccionada)
    }


    return(
        <div className="itemDetail">

            {

                producto ?
                <>
                <img src={producto.img}/>
                <div className="itemDetail_producto">

                    <h2>{producto.nombre}</h2>
                    <p>{producto.precio}</p>
                    <p>{producto.fechalanzamiento}</p>
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>

                </div>
                </>
                :
                <span>Cargando...</span>

            }

        </div>
    )

}

export default ItemDetail