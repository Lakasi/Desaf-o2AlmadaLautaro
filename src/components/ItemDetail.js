import ItemCount from "./ItemCount"
function ItemDetail({detalles}){

    return(
        <section className="itemDetailsContainer">
            <h2 className="titleDetails">Detalles del producto</h2>
            <div className="itemDetailContainerInfo">
                <div className="p-2 detailsInfo">
                    <h4>{detalles[0].nombre}</h4>
                    <h4>Fecha de lanzamiento: {detalles[0].fechalanzamiento}  </h4>        
                    <h4>Precio: {detalles[0].precio}$</h4>
                    <ItemCount/>
                </div>
                <div className="p-2">
                    <img className="imgDetail" src={detalles[0].img}/>
                </div>
            </div>
        </section>
    )

}

export default ItemDetail