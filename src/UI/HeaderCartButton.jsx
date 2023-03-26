import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtn] = useState(false);

  const ctx = useContext(CartContext);
  const { items } = ctx;
  //Doubt why this numberof cart items function here ? can't we send the value of that instead ?
  //ans:cause we are not mainting the totalQuantity state cause we can easliy find that out using items araay

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    setBtn(true);

    const timer = setTimeout(() => {
      setBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
