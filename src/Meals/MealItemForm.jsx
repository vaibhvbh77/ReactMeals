import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const inputRef = useRef();
  const [showError, setShowError] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    var enteredAmount = inputRef.current.value;
    enteredAmount = +enteredAmount;
    if (enteredAmount.length == 0 || enteredAmount < 1 || enteredAmount > 5) {
      setShowError(true);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* <input type="number" /> */}
      <Input
        ref={inputRef}
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />

      <button type="submit">+ Add</button>
      {showError && <h1>Enter correct amount within 1-5</h1>}
    </form>
  );
};

export default MealItemForm;
