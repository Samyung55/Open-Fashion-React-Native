import { cartActionTypes } from "../utils/cartActionTypes";

const initialState = {
  cartItems: [], // Initialize your cart with an empty array
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += newItem.quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If the item is not in the cart, add it
        return { ...state, cartItems: [...state.cartItems, newItem] };
      }

    case cartActionTypes.REMOVE_FROM_CART:
      const itemIdToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
      return { ...state, cartItems: updatedCartItems };

    case cartActionTypes.INCREASE_QUANTITY:
      const itemIdToIncrease = action.payload;
      const increasedCartItems = state.cartItems.map(item =>
        item.id === itemIdToIncrease ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, cartItems: increasedCartItems };

    case cartActionTypes.DECREASE_QUANTITY:
      const itemIdToDecrease = action.payload;
      const decreasedCartItems = state.cartItems.map(item =>
        item.id === itemIdToDecrease && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, cartItems: decreasedCartItems };

    case cartActionTypes.TOGGLE_CART_ITEM_AMOUNT:
      const { id, value } = action.payload;

      const tempCart = state.cartItems.map(item => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });

      return { ...state, cartItems: tempCart };

    default:
      return state; // Return the state as-is for unknown action types
  }
};

export default cartReducer;
