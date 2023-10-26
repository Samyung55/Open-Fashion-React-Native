import { createContext, useReducer, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOGGLE_CART_ITEM_AMOUNT } from "../contexts/utils/cartActionTypes"; // Import your action type
import cartReducer from './reducers/cartReducer';

const CartContext = createContext({
  cart: { cartItems: [] },
  dispatch: () => {},
  toggleAmount: () => {}
});

let cartState = {
  cartItems: []
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, cartState);

  // toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const value = {
    cart,
    dispatch,
    toggleAmount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCartContext Error")
  }

  return context
}
