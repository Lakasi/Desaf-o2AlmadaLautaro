import { contexto } from "./CartContext"
import {useContext} from "react"
import ItemCount from "./ItemCount"

function ItemDetail({producto}){ 

    const {agregarCarrito} = useContext(contexto)
    
    const onAdd = (unidadSeleccionada = 1)=>{
        agregarCarrito(producto, unidadSeleccionada)
    }


    return(
        <div className="itemDetail">

            {

                producto ?
                <>
                <div className="itemDetailContainer">
                    <div className="itemDC_left">
                        <img src={producto.imagen} alt="img_product" className="p_img"/>   
                    </div>
                    <div className="itemDC_right">
                             
                        <h1 className="p_nombre">{producto.nombre}</h1>
                        <h2 className="p_precio">{producto.precio}$</h2>
                        
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>
                    </div>
                </div>
                </>
                :
                <span>Cargando...</span>

            }

        </div>
    )

}

export default ItemDetail