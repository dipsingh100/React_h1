import "./App.css";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import { useState } from "react";

function App() {
  let [left, setLeft] = useState(0);
  let [right, setRight] = useState(0);

  return (
    <div>
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="container">
        <div className="leftBox">
          <button className="btn" onClick={()=>{setLeft(!left)}}>
            To see styling in functional component
          </button>
          { left? <FunctionComponent/>  : null }
        </div>
        <div className="rightBox">
          <button className="btn" onClick={()=>{setRight(!right)}}>To see styling in class component</button>
          { right? <ClassComponent/>  : null }
        </div>
      </div>
    </div>
  );
}

export default App;
