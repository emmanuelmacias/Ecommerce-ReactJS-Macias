import React from "react"
import { createContext, useState } from "react"

export const CartContext = createContext(); /* ARRAY DE PRODUCTOS - DATA */

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (existItem !== -1) {
            const newCart = cart.filter(item => item !== cart[existItem])
            setCart([{ item, quantity }, ...newCart])
        } else {
            setCart([...cart, { item, quantity }])
        }
    }

    const removeItem = (item) => {
        const newCart = cart.filter(oldItem => oldItem.item !== item)
        setCart([...newCart])
    }

    const clear = () => {
        setCart([])
    }

    const existItem = (id) => cart.some((producto) => producto.id === id);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
