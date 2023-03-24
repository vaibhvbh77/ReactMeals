import React from "react";
import classes from "./Header.module.css";
import img from "../Assets/food.jpg";
import HeaderCartButton from "../UI/HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="Food Image" />
      </div>
    </>
  );
};

export default Header;
