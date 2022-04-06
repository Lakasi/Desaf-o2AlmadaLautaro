import { contexto } from "./CartContext"
import {useContext} from "react"
import ItemCount from "./ItemCount"

function ItemDetail({detalles}){ 

    const {agregarCarrito} = useContext(contexto)
    const onAdd = (unidadSeleccionada)=>{
        agregarCarrito(detalles[0], unidadSeleccionada)
    }


    return(
        <section className="itemDetailsContainer">
            <h2 className="titleDetails">Detalles del producto</h2>
            <div className="itemDetailContainerInfo">
                <div className="p-2 detailsInfo">
                    <h4>{detalles[0].nombre}</h4>
                    <h4>Fecha de lanzamiento: {detalles[0].fechalanzamiento}  </h4>        
                    <h4>Precio: {detalles[0].precio}$</h4>
                    
                </div>
                <div className="p-2">
                    <img className="imgDetail" src={detalles[0].img}/>
                </div>
            </div>
            <ItemCount initial = {1} stock={7} onAdd={onAdd}/>
        </section>
    )

}

export default ItemDetail