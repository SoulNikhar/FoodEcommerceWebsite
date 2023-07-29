export const initialState = {
    cartItems: [],
    user: null
  };
  
  export const getCartTotal = (cartItems) =>
    cartItems?.reduce((total, item) => item.price * item.quantity + total, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [...state.cartItems, action.item],
        };
  
      case "REMOVE_FROM_CART":
        const index = state.cartItems.findIndex((item) => item.id === action.id);
        let newCartItems = [...state.cartItems];
        if (index >= 0) {
          newCartItems.splice(index, 1);
        } else {
          console.warn(`Can't remove product (id:${action.id}) as it's not in cart!`);
        }
        return {
          ...state,
          cartItems: newCartItems,
        };
  
      case "INCREMENT_QUANTITY":
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
  
      case "DECREMENT_QUANTITY":
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;