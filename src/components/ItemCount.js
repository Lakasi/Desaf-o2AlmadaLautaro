import {useState} from "react"

function ItemCount() {
    let [stock, setStock] = useState(5);
    let [cont, setCont] = useState(1);

    
    const aumentar = () =>{

        if (cont < 6) {
            setCont(cont + 1);
            setStock(stock - 1)
        }
    }
    const reducir = () =>{

        if (cont > 1) {
            setCont(cont - 1);
            setStock(stock + 1)
        }
    }
    const reestrablecer = () => {
        setCont(1);
        setStock(5);
    }

    return(
        <main>
            <div className="bg-secondary p-2 itemCount">
                <h4>Cantidad: {cont}</h4>
                <h4>Stock: {stock}</h4>
                <button onClick={reducir}>-</button>
                <button onClick={reestrablecer}>restart</button>
                <button onClick={aumentar}>+</button>
            </div>
        </main>
    );
}

export default ItemCount