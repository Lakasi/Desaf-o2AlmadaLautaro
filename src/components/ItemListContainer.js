import ItemList from "./ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "./Firebase"
import {getDocs, collection, query, where} from "firebase/firestore"

function ItemListContainer(){

    const [productos, setProductos] = useState([])
    const {cat} = useParams()

    
    useEffect(()=>{

        if(cat){

            const q = query(collection(db, "juegos"), where("consola", "==", cat))

            getDocs(q)
            .then((resp)=>setProductos(resp.docs.map(p => ({juegos: p.data(),id: p.id}))))
            .catch((err)=>{console.log(err)})

        }else{

            getDocs(collection(db, "juegos"))
            .then((resp)=>setProductos(resp.docs.map(p => ({productos:p.data(), id: p.id}))))   
            .catch((err)=>console.log(err))
        }
    },[cat])

    console.log(productos)

    return(
        <section className="itemListContainer">
            <ItemList productos={productos}/>
        </section>
    )
}

export default ItemListContainer