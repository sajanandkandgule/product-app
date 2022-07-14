import React from "react";
import ProductContainer from "./ProductContainer";

const App = (props) =>{

    return(
        <div className="container" style={{backgroundColor: "wite"}}>
            <h2 style = {{textAlign :"left"}}> Product -List</h2>
            <ProductContainer/>
        </div>
    )
}
export default App