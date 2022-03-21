import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const listaDetalleProductos = [
    {
        id: 153 ,
        nombre: "Item 1",
        precio: 100,
        fechalanzamiento: 2012,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 212 ,
        nombre: "Item 2",
        precio: 150,
        fechalanzamiento: 2020,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 342 ,
        nombre: "Item 3",
        precio: 220,
        fechalanzamiento: 2015,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 412 ,
        nombre: "Item 4",
        precio: 180,
        fechalanzamiento: 2021,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 552 ,
        nombre: "Item 5",
        precio: 240,
        fechalanzamiento: 2018,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 601 ,
        nombre: "Item 6",
        precio: 130,
        fechalanzamiento: 2014,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 706 ,
        nombre: "Item 7",
        precio: 120,
        fechalanzamiento: 2022,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    },
    {
        id: 704 ,
        nombre: "Item 8",
        precio: 199,
        fechalanzamiento: 2017,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGUaLrp1DHqscyeqNpKdeSNAkOhkA3k55Yg&usqp=CAU"
    }
]

function ItemDetailContainer (){

    const [details, setDetails] = useState([])
    const [isLoading, setLoading] = useState(true)
    const {id} = useParams()

    const detailsPromise = new Promise((res)=>{
        res(listaDetalleProductos) 
    })

    useEffect(()=>{
        
        if(id){
            detailsPromise
            .then((listaDetalleProductos)=>{
                setDetails(listaDetalleProductos.filter(p => p.id == id))
                setLoading(false)
            })    
            .catch((err)=>{console.log(err)}) 
        }else{
            detailsPromise
            .then((listaDetalleProductos)=>{
                setDetails(listaDetalleProductos)
                setLoading(false)
            })    
            .catch((err)=>{console.log(err)})  
        }

    },[id])

    return(
        <section className="itemDetailContainer">
            {
                isLoading ? <span>Cargando...</span> : <ItemDetail detalles={details}/>
            }
        </section>
    )

}

export default ItemDetailContainer