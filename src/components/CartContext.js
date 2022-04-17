import { createContext, useState, useEffect } from "react";
export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    let productoCarritoAux = []

    useEffect(()=>{
        checkTotal()
    },[carrito])

    
    const agregarCarrito = (producto, cantidad) => {

        let productoCarrito = {producto, cantidad}

        if(isInCart(producto)){
            productoCarrito = carrito.find(p => p.producto.id == producto.id)
            productoCarrito.cantidad = productoCarrito.cantidad + cantidad;
            productoCarritoAux = [...carrito]
        }
        else{
            productoCarritoAux = [...carrito,productoCarrito]
        }
        setCarrito(productoCarritoAux)

    }
    
    const borrarCarrito = (id) => {
        productoCarritoAux = carrito.filter(p => p.producto.id !== id)
        setCarrito(productoCarritoAux)
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
    }

    const [total, setTotal] = useState(0)
    const checkTotal = () => {
        let totalAux = 0
        carrito.map(p => {
            totalAux = totalAux + (p.producto.precio * p.cantidad)
        })
        setTotal(totalAux)
    }

    const isInCart = (producto) => {
        const resultado = carrito.some(p => p.producto.id == producto.id)
        return resultado
    }

    return(
        <Provider value={{
            agregarCarrito,
            borrarCarrito,
            limpiarCarrito,
            carrito,
            total }}
            >
            {children}
        </Provider>
    )
    
}

export default MiProvider