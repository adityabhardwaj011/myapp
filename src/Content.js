import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Content() {
    const [products,setproducts] = useState([])
    const url = "http://localhost:8080/"
    const getData = async () => {
        const response = await axios.get(url)
        setproducts(response.data)
    }
    const deleteProduct = async(id) => {
        // const response = await axios.delete(url+id)
        await axios.delete(url+id)
        // getData(response)
        getData()
    }
    useEffect(()=>{
        getData()
    },[])
    // const products = [
    //     {name:"product 1",price:"45",url:"https://picsum.photos/id/1/200/200"},
    //     {name:"product 2",price:"45",url:"https://picsum.photos/id/2/200/200"},    //hard coding products from react not fetching from backend
    //     {name:"product 3",price:"45",url:"https://picsum.photos/id/3/200/200"},
    // ]
  return (
    <div style={{display:'flex', justifyContent:'center',flexWrap:'wrap'}}>
        {products.map((value,index)=>(
            <div key={index} style={{backgroundColor:'plum' , margin: '10px', padding: '10px'}}>
                <img height="200px" width={200} src={value.url} alt=''></img>
                <h2 key={index}>{value.name}</h2>
                <h3>${value.price}</h3>
                <h4>{value.price}</h4>
                <button>Add to cart</button>
                <button size="lg" onClick={() => deleteProduct(value._id)}>Delete Product</button>
            </div>
        ))}
    </div>
  )
}
