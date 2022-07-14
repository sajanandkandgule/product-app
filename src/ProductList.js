import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) =>{
    const {products ,removeItem, editItem } = props

    return(
        <div>
            {
                products.length === 0 ? (
                    <div>
                        <p>No product found add your First Product</p>
                    </div>
                ) :(
                    <div>
                        { products.map((ele) =>{
                            return <ProductItem key = {ele.id} {...ele} removeItem = {removeItem} editItem ={editItem }/>
                        })}
                       


                    </div>

                )
            }
        </div>
    )
}
export default ProductList



// 
//  https://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@github.com/sajanandkandgule/product-app.git