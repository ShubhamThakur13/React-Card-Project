import React from "react";
import './App.css'
import ProductOne from "./components/ProductOne/ProductOne.jsx";
import ProductTwo from "./components/ProductTwo/ProductTwo.jsx";
import ProductThree from "./components/ProductThree/ProductThree.jsx";

const App = () =>{
  return(
    <div className="main">
      <ProductOne/>
      <ProductTwo/>
      <ProductThree/>
    </div>
  )
}

export default App;