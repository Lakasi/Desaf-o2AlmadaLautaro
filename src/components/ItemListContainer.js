import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useState, useEffect } from "react";

const listaProductos = [
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


function ItemListContainer({greeting}){

    //<ItemCount/>
    const [productos, setProductos] = useState([])

    const productoPromise = new Promise((resolve,rej)=>{

        setTimeout(()=>{

            resolve(listaProductos)
                    
        },2000) 
    })

    useEffect(()=>{

        productoPromise
        .then((listaProductos)=>{setProductos(listaProductos)})
        .catch((err)=>{console.log(err)})

    },[])

    return(
        <section className="itemListContainer">
            <h2>
                {greeting}
            </h2>
            <ItemList productos={productos}/>
        </section>
    )
}

export default ItemListContainer