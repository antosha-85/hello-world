import React from "react";
// import classes from "./Backdrop.module.css";
import "./Backdrop.css";

const backdrop = (props) => {
  // const cssClasses = [
  //   classes.Backdrop,
  //   props.show ? classes.BackdropOpen : classes.BackdropClosed,
  // ];
  const cssClasses = [
'Backdrop',
    props.show ? 'BackdropOpen' : 'BackdropClosed',
  ];
  return <div className={cssClasses.join(" ")}>Hello</div>;
};

export default backdrop;