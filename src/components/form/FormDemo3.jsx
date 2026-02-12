import React ,{useState}from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
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
            <label>Name</label>
            <input type="text" placeholder="name" {...register("name")}/><br/>
            <label>Contact</label>
            <input type="number" placeholder="contact" {...register("contact")}/><br/>
            <label>Age</label>
            <input type="number" placeholder="age" {...register("age")}/><br/>
            <label>Gender</label>
            Male : <input type="radio" value="male" {...register("gender")}/><br/>
            Female : <input type="radio" value="female" {...register("gender")}/><br/>
            Other : <input type="radio" value="other" {...register("gender")}/><br/>
            <label>Address</label>
            <input type="text-area" placeholder="address" {...register("address")}/><br/>
            <input type="submit" style={{background:'green',color:'black'}}/>
        </form>
        {
            isSubmited == true && <div style={{background:'grey',color:'pink'}}>
                <h2 style={{color:'aqua'}}>User Profile</h2>
                <h5>Name = {userData.name}</h5>
                <h5>Contact = {userData.contact}</h5>
                <h5>Age = {userData.age}</h5>
                <h5>Gender = {userData.gender}</h5>
                <h5>Address = {userData.address}</h5>
                </div>

        }
    </div>
  )
}
