
function ItemDetail({detail}){

    return(
        <div>
            <div>
                <img src={detail.img} />
            </div>
            <div>
                <h3>{detail.nombre}</h3>
                <h4>{detail.precio}</h4>
                <h4>{detail.id}</h4>
            </div>
        </div>
    )

}

export default ItemDetail