import React, {useState} from "react";

const ProductForm = (props) =>{
    const { handleSubmmit , handleToggle , id :  slNo , title : titleName , price : cost} = props
    const [id ,setId] = useState(slNo?slNo:Number(new Date()))
    const [title , setTitle] = useState(titleName? titleName:"")
    const [ price , setPrice] = useState(cost?cost:"")

    const handleChange =(e) =>{
        setTitle(e.target.value)
    }

    const handlePriceChange = (e) =>{
        setPrice(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData ={
            id:id,
            title:title,
            price:price
        }
        console.log(formData)
        handleSubmmit(formData)
         if(handleToggle){
            handleToggle()
        }
          setId(Number(new Date()))
            setTitle('')
            setPrice('')
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Product</label><br/>
                <input type = "text" value = {title} onChange= {handleChange} /><br/>
                <label> Price</label><br/>
                <input type= "text" value = {price} onChange = {handlePriceChange}/><br/>
                
                <button className="btn btn-success"> AddProduct </button>
            
            </form>

        </div>
    )
}
export default ProductForm