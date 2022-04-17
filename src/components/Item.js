import { Link } from "react-router-dom"

function Item ({producto}) {

    const {productos, id} = producto;

    return(
        
        <li className="item">
        <Link to={`/item/${id}`}>    
            <div>
                <img className="item_img" alt="itemimg" src={productos.imagen}/>
            </div>
        <div>
            <h3 className="item_nombre">{productos.nombre}</h3>
            <h2 className="item_precio" >$ {productos.precio}</h2>
        </div>
        </Link>
        </li>
    )
}

export default Item
