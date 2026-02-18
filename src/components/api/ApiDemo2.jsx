import React ,{useState}from 'react'
import axios from 'axios'
export const ApiDemo2 = () => {
    const [message,setmessage] = useState("")
    const [products,setproducts] = useState([])
    const getProducts = async()=>{
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data)
        setproducts(response.data.products)
        get()
    }
  return (
    
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>
        <button onClick={()=>{getProducts()}}>GET</button>
        <h1>MESSAGE = {message}</h1>
        {
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>DISCOUNT(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product)=>{
                            return <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.discountPercentage}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }
    </div>
  )
}
