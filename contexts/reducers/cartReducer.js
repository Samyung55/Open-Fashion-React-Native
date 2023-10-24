import * as actionType from '../utils/cart';

const initialState = {
  cartItems: [], // Initial state for cartItems
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((i) => i.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        // If it doesn't exist, add the item to the cartItems array
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
