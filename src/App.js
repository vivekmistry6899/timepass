import React from "react";
import "./styles.css";
import Navbar from "./Navbar.js";

export default function App() {
  return (
    <div className="App">
      <div class="row col-12">
        <div class="col-3">VIVEK</div>
        <div class="col-3">MISTRY</div>
        <div class="col-3">Hello CodeSandbox</div>
        <Navbar />
      </div>
    </div>
  );
}
