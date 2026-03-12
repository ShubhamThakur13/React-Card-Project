import React from "react";
import './App.css'
import ProductOne from "./assets/components/ProductOne/ProductOne.jsx";
import ProductTwo from "./assets/components/ProductTwo/ProductTwo.jsx";
import ProductThree from "./assets/components/ProductThree/ProductThree.jsx";

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