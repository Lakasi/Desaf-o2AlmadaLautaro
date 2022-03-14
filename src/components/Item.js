let listaProductos = [
    {
        id: 1 ,
        nombre: "Item 1",
        precio: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 2 ,
        nombre: "Item 2",
        precio: 150,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 3 ,
        nombre: "Item 3",
        precio: 130,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    }
]


function Item ({producto}) {

    return(
        <li className="item">
            <div>
                <img className="item_img" src={producto.img}/>
            </div>
        <div>
            <h3 className="item_nombre">{producto.nombre}</h3>
            {/* <h4 className="item_id">{producto.id}</h4> */}
            <h4 className="item_precio">{producto.precio}</h4>
        </div>
        </li>
    )
}

export default Item
