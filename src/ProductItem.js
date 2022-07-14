import React , {useState} from "react";
import EditItem from "./EditItem";
const ProductItem = (props) =>{
    const {id , title , price, removeItem , editItem } = props
    const [toggle , setToggle] = useState(false)

    const handleRemove = (id) =>{
        const confirmRemove = window.confirm("are you sure")
        if(confirmRemove){
            removeItem(id)
        }
    }

    const handleToggle = () =>{
        const result = !toggle
        setToggle(result)
    }



    return(
        <div>
         {      
            (toggle) ? (
                    <div>
                    <EditItem
                    id = {id}
                    title={title}
                    price = {price}
                    handleToggle = {handleToggle}
                    editItem = {editItem }
                    
                    />
                    <button onClick = {handleToggle}>Cancel</button>
                    </div>
                
                ) :(
                    <div>
                    <h3> title - {title}</h3>
                    <h3> price- {price}</h3>
                    <button className="btn btn-danger" onClick = {() =>{
                        handleRemove(id)
                    }}>Remove</button>
                    <button  className = "btn btn-warning" onClick = {handleToggle}>Edit</button>
                    </div>
                )
                       }
        </div>
    )
}
export default ProductItem