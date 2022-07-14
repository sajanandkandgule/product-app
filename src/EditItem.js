import React from "react";
import ProductForm from "./ProductForm";

const EditItem = (props) =>{

    const {id, title ,price ,handleToggle ,editItem } = props

    const handleSubmmit= (data) =>{
        editItem(data)
    }


    return(
        <div>
            <ProductForm id ={id} title = {title} price = {price}
            handleSubmmit = {handleSubmmit} handleToggle = {handleToggle}/>

        </div>
    )
}
export default EditItem