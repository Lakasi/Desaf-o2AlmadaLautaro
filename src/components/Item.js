import { Link } from "react-router-dom"

function Item ({producto}) {

    return(
        <li className="item">
            <div>
                <img className="item_img" src={producto.img}/>
            </div>
        <div>
            <h3 className="item_nombre">{producto.nombre}</h3>
            <h2 className="item_precio" >$ {producto.precio}</h2>
            <button className="btn btn-outline-dark"><Link className="navLinks" to={`/item/${producto.id}`}>Ver detalle</Link></button>
        </div>
        </li>
    )
}

export default Item
