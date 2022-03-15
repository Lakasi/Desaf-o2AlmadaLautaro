import ItemCount from "./ItemCount"
function ItemDetail({detalles}){

    const nombre = detalles.map((detalle) => {return detalle.nombre})
    const fechaLanzamiento = detalles.map((detalle) => {return detalle.fechalanzamiento})
    const precio = detalles.map((detalle) => {return detalle.precio})
    const img = detalles.map((detalle) => {return detalle.img})

    return(
        <section className="itemDetailsContainer">
            <h2 className="titleDetails">Detalles del producto</h2>
            <div className="itemDetailContainerInfo">
                <div className="p-2 detailsInfo">
                    <h4>{nombre[0]}</h4>
                    <h4>Fecha de lanzamiento: {fechaLanzamiento[0]}  </h4>        
                    <h4>Precio: {precio[0]}$</h4>
                    <ItemCount/>
                </div>
                <div className="p-2">
                    <img className="imgDetail" src={img[0]}/>
                </div>
            </div>
        </section>
    )

}

export default ItemDetail