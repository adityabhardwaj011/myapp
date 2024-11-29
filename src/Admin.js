import React, { useState } from 'react'
import axios from 'axios'

export default function Admin()  {
    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [desc,setDesc] = useState()
    const [url,setUrl] = useState()
    const api = "http://localhost:8080/"

    const addProduct = async () => {
        await axios.post(api,{name:name,price,desc:desc,url:url})
    }
    return (
      <div>Admin
        <p><input type="text" onChange={(e) => setName(e.target.value)} placeholder='enter name'></input></p>
        <p><input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='enter price'></input></p>
        <p><input type="text" onChange={(e) => setDesc(e.target.value)} placeholder='enter descryption'></input></p>
        <p><input type="text" onChange={(e) => setUrl(e.target.value)} placeholder='enter URL'></input></p>
        <button onClick={addProduct}>Save</button>
      </div>
    )
}
