import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Carrito from "./Carrito";

function Main (props) {

    const handleToast = () => {

        toast.warn("Hubo un error")

    }

    return(
        <main>
            {/* <button onClick={handleToast}>Boton notificación</button> */}
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/detail" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    );
}
export default Main