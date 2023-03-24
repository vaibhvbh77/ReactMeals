import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onShowCart}></div>;
};
const Modaloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onShowCart={props.onShowCart} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
