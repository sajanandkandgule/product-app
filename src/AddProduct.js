import React from "react";
import ProductForm from "./ProductForm";


const AddProduct = (props) =>{
    const{addItem} = props

    const handleSubmmit = (FormData) =>{
         addItem(FormData)
    }
    return(
        <div>
            <ProductForm handleSubmmit= {handleSubmmit}/>
        </div>
    )
}
export default AddProduct