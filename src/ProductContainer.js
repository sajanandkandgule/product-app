import React,{useState , useEffect} from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

const ProductContainer = (props) =>{
    const [products, setProducts] = useState([])
    
  useEffect(()=>{
     const result = JSON.parse(localStorage.getItem('products')) || []
     setProducts(result)
  },[])


    useEffect(()=>{
      localStorage.setItem('products' , JSON.stringify(products))
    },[products])

   


    const addItem = (data) =>{
        console.log("data", data)
        const result = [{...data} , ...products] 
        setProducts(result)
        console.log(products)
    }


  const removeItem = (id) =>{
    const result = products.filter((ele) =>{
      return ele.id != id
    })
    setProducts(result)
  }

  const editItem = (data) =>{
    const result = products.map((ele) =>{
      if(ele.id === data.id){
        return {...ele , ...data}
      }else {
        return {...ele}
      }
    })
    setProducts(result)


  }

    return(
        <div className = "row" >
          <div className = "col-md-8" style={{backgroundColor: "white"}}>
          <ProductList products = {products} removeItem = {removeItem} editItem  ={editItem }/>
          </div>
          <div className = "col-md-4"  style={{backgroundColor : "beige"}}>
          <AddProduct addItem={addItem}/>
          </div>
         
            

        </div>
    )
}
export default ProductContainer

