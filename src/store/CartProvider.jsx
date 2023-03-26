import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingItemIndex];
    let updatedCartItems;
    if (existingCartItem) {
      let updatedCartItem;
      updatedCartItem = {
        ...existingCartItem,
        amount: action.payload.amount + existingCartItem.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updatedCartItem;
    } else {
      updatedCartItems = state.items.concat(action.payload);
    }

    // const updatedCart = state.items.concat(action.payload);

    return { items: updatedCartItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    const existingCartItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedCartItems;
    if (existingCartItem.amount !== 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.items.filter(
        (item) => item.id !== action.payload
      );
    }
    return { items: updatedCartItems, totalAmount: updatedTotalAmount };
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
