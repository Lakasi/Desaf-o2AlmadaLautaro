import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDoc,doc} from "firebase/firestore"
import {db} from "./Firebase"

function ItemDetailContainer (){

    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        const docRef = doc(db, 'juegos', id);
        getDoc(docRef)
        .then((res)=> setProducto(res.data()))
        .catch((err)=>console.log(err))

    },[id])

    return(
        <section className="itemDetailContainer">
            <ItemDetail producto={producto}/>
        </section>
    )

}

export default ItemDetailContainer