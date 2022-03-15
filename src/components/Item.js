function Item ({producto}) {

    return(
        <li className="item">
            <div>
                <img className="item_img" src={producto.img}/>
            </div>
        <div>
            <h3 className="item_nombre">{producto.nombre}</h3>
            {/* <h4 className="item_id">{producto.id}</h4> */}
            {/* <h4 className="item_precio">{producto.precio}</h4> */}
        </div>
        </li>
    )
}

export default Item
