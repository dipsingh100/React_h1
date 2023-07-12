import React from "react";
import "../App.css";

const FunctionComponent = () => {
  return (
    <div className="box l">
      <h1 className="heading2">This is created using functional Component</h1>
      <p>This is done using external CSS</p>
      <p style={{color:"blue"}}>This is done using inline CSS</p>
    </div>
  );
};

export default FunctionComponent;
