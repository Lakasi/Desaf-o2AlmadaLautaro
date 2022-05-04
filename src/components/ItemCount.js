import {useState} from "react"

function ItemCount({initial=1, stock, onAdd}) {

    const [cont, setCont] = useState(1)
    
    const aumentar = () => {

        if (cont < stock) {
            setCont(cont + 1)
        }
    }
    const reducir = () => {

        if (cont > initial) {
            setCont(cont - 1)
        }
    }
    const confirmar = () => {
        onAdd(cont);
    }

    return(
        <main>
            <div className="p-2 itemCount">
                <h4>Cantidad: {cont}</h4>
                <button onClick={reducir}>-</button>
                <button onClick={confirmar}>Agregar a carrito</button>
                <button onClick={aumentar}>+</button>
            </div>
        </main>
    );
}

export default ItemCount