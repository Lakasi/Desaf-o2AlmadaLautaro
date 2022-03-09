import {useState} from "react"

function ItemCount() {
    let stock = 6;
    let [cont, setCont] = useState(1);

    
    const aumentar = () =>{

        if (cont < stock) {
            setCont(cont + 1);
        }
    }
    const reducir = () =>{

        if (cont > 1) {
            setCont(cont - 1);
        }
    }
    const reestrablecer = () => {
        setCont(1);
    }

    return(
        <main>
            <div>
                <h2>Contador: {cont}</h2>
                <h2>Stock: {stock}</h2>
                <button onClick={reducir}>-</button>
                <button onClick={reestrablecer}>restart</button>
                <button onClick={aumentar}>+</button>
            </div>
        </main>
    );
}

export default ItemCount