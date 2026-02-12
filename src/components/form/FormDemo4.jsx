import React ,{useState}from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit} = useForm()
    const [userData,setuserData] = useState({})
    const [isSubmited,setisSubmited] = useState(false)

    const submitHandler = (data) =>{
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }
  return (
    <div style={{textAlign:"center",backgroundColor:"lightblue",padding:"20px",color:"black"}}>
        <h1>User Profile</h1>
        <form onSubmit= {handleSubmit(submitHandler)}>
            <label>Product Name</label>
            <input type="text" placeholder="product name" {...register("productname")}/><br/>
            <label>Category</label>
            <input type="number" placeholder="category" {...register("category")}/><br/>
            <label>Price</label>
            <input type="number" placeholder="price" {...register("price")}/><br/>
            <label>Image</label>
            <input type="file" placeholder="image" {...register("image")}/><br/>
            <label>Description</label>
            <input type="text-area" placeholder="description" {...register("description")}/><br/>
            <input type="submit" style={{background:'green',color:'black'}}/>
        </form>
        {
            isSubmited == true && <div style={{background:'grey',color:'pink'}}>
                <h2 style={{color:'aqua'}}>Product Profile</h2>
                <h5>Product Name = {userData.productname}</h5>
                <h5>Category = {userData.category}</h5>
                <h5>Price = {userData.price}</h5>
                <h5>Image = {userData.image}</h5>
                <h5>Description = {userData.description}</h5>
                </div>

        }
    </div>
  )
}
