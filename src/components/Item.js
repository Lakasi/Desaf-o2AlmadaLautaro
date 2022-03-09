import { useState, useEffect } from "react";

let listaProductos = [
    {
        id: 1 ,
        nombre: "Item 1",
        precio: 100,
    },
    {
        id: 2 ,
        nombre: "Item 2",
        precio: 150,
    },
    {
        id: 3 ,
        nombre: "Item 3",
        precio: 130,
    }
]


function Item () {

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        
        setTimeout(()=>{
            setProductos(listaProductos);
            setLoading(false);
        },2000)

    })

    return(
        <>
        <h2>{loading}</h2>
        <div>
            <ul>
                {setProductos !== 0 ? productos.map((producto)=>{
                    return (
                       <li>
                           <div className="card">
                            <img className="card-img-top" src="https://i.blogs.es/591b5a/280518-darksouls-review/1366_2000.jpg" alt={producto.nombre}/>
                            <div className="card-body">
                                <p class="card-text">
                                    Nombre : {producto.nombre} <br />
                                    Precio : {producto.precio}.
                                </p>
                            </div>
                            </div>
                        </li>
                    )
                }) : "No hay productos"}
            </ul>
        </div>
        </>
    );
}

export default Item
