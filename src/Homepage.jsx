import React from "react";
import "./App.css";
function Homepage(props) {
  // children is recieving the props as an object and using inside the jsx
  return (
    <div className="homepage">
      {console.log(props)}
      {console.log(props)}
      {/* changin the state from the button click from children */}
      <button onClick={props.h}>{props.vari}</button>
      <button onClick={props.i}>{props.varij}</button>
      <button onClick={props.j}>{props.varik}</button>
    </div>
  );
}
export default Homepage;
