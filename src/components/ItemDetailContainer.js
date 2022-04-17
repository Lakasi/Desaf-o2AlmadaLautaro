import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, where, query, getDoc,doc} from "firebase/firestore"
import {db} from "./Firebase"

function ItemDetailContainer (){

    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        
        const q = query(collection(db, "juegos"), where("id", "==", id))

        getDocs(q)
        .then((resp)=>setProducto(resp.docs.map(p => ({producto:p.data()}))))
        .catch((err)=>console.log(err))

        const docRef = doc(db, 'productos', id);
        getDoc(docRef)
        .then((res)=> setProducto(res.data()))

    },[id])
    console.log(producto)

    return(
        <section className="itemDetailContainer">
            <ItemDetail producto={producto}/>
        </section>
    )

}

export default ItemDetailContainer