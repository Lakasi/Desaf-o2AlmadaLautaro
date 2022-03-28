import NavBar from "./NavBar"
import Footer from "./Footer"
import "./estilos.css"
import Main from "./Main"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import CartContext from "./CartContext"

function App () {
    return( 
        <CartContext>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </CartContext>
    )
};
export default App