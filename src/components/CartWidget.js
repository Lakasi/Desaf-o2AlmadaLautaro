import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom"

function CartWidget () {

    return(
        
        <div>
            <Link to="/carrito"><AiOutlineShoppingCart className="widget"/></Link>
        </div>

    )


}
export default CartWidget