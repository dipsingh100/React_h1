import React, { Component } from "react";
import "../index.css";

export default class ClassComponent extends Component {
  render() {
    return (
      <div className="box r">
        <h1 className="heading2">This is created using class Component</h1>
        <p>This is done using external CSS</p>
        <p className="blue">This is done using external CSS</p>
      </div>
    );
  }
}
