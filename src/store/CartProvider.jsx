import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedCart = state.items.concat(action.payload);
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    return { items: updatedCart, totalAmount: updatedTotalAmount };
  }
};
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    cartDispatcher({ type: "ADD", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    cartDispatcher({ type: "REMOVE", payload: id });
  };

  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultState);
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addItemToCartHandler,
    removeFromCart: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
