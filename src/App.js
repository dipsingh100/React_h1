import "./App.css";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassCoponent";
import { useState } from "react";

function App() {
  let [left, setLeft] = useState(0);
  let [right, setRight] = useState(0);

  let handleLeft = ()=>{
    if (left)
      setLeft(0)
    else
      setLeft(1)
  }

  let handleRight = ()=>{
    if (right)
      setRight(0)
    else
      setRight(1)
  }
  return (
    <div>
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="container">
        <div className="leftBox">
          <button className="btn" onClick={handleLeft}>
            To see styling in functional component
          </button>
          { left? <FunctionComponent/>  : null }
        </div>
        <div className="rightBox">
          <button className="btn" onClick={handleRight}>To see styling in class component</button>
          { right? <ClassComponent/>  : null }
        </div>
      </div>
    </div>
  );
}

export default App;
