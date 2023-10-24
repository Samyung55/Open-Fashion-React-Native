import { createContext, useReducer, useContext } from 'react'

import cartReducer from './reducers/cartReducer'

const CartContext = createContext('')

let cartState = {
    cartItems: []
}

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, cartState)

    const value = {
        cart, dispatch
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)

    if(!context) {
        throw new Error("useCartContext Error")
    }

    return context
}

console.log(CartContext)