import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom"
import {contexto} from "./CartContext"
import { useContext } from "react"

function CartWidget () {

    const {carrito} = useContext(contexto)

    return(
        
        <div>
            <Link to="/carrito"><AiOutlineShoppingCart className="widget"/>({carrito.length})</Link>
        </div>

    )


}
export default CartWidget