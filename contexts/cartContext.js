import { createContext, useReducer, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import cartReducer from './reducers/cartReducer'

const CartContext = createContext('')

let cartState = {
    cartItems: []
}

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, cartState)

    useEffect(() => {
        // Load cart items from AsyncStorage when the app starts
        (async () => {
          try {
            const cartItems = await AsyncStorage.getItem('cartItems');
            if (cartItems) {
              dispatch({ type: 'INITIALIZE_CART', payload: JSON.parse(cartItems) });
            }
          } catch (error) {
            console.error('Error loading cart items:', error);
          }
        })();
      }, []);
    
      useEffect(() => {
        // Save cart items to AsyncStorage whenever the cart state changes
        AsyncStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
      }, [cart.cartItems]);

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