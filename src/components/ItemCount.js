import {useState} from "react"

function ItemCount({initial, stock, onAdd}) {

    const [cont, setCont] = useState(1)
    
    const aumentar = (e) => {

        if (cont < stock) {
            setCont(cont + 1)
        }
    }
    const reducir = (e) => {

        if (cont > initial) {
            setCont(cont - 1)
        }
    }
    const confirmar = (e) => {
        onAdd(cont);
    }

    return(
        <main>
            <div className="bg-secondary p-2 itemCount">
                <h4>Cantidad: {cont}</h4>
                <h4>Stock: {stock}</h4>
                <button onClick={reducir}>-</button>
                <button onClick={confirmar}>Confirmar</button>
                <button onClick={aumentar}>+</button>
            </div>
        </main>
    );
}

export default ItemCount