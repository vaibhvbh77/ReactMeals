import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const cardClass = props.className;
  return <div className={`${classes.card} ${cardClass}`}>{props.children}</div>;
};

export default Card;
