import ItemDetail from "./ItemDetail";
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

function ItemDetailContainer (){

    const [details, setDetails] = useState([])

    const detailsPromise = new Promise((res)=>{

        setTimeout(()=>{

            res(listaProductos)
                    
        },2000) 
    })

    useEffect(()=>{

        detailsPromise
        .then((listaProductos)=>{setDetails(listaProductos)})
        .catch((err)=>{console.log(err)})

    },[])

    return(
        <section className="itemDetailContainer">
            {details.map((detail)=>{
            return <ItemDetail detalles={detail}/>
        })}
        </section>
    )

}

export default ItemDetailContainer