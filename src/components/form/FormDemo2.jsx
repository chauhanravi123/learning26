import React,{useState} from 'react'
import {useForm} from 'react-hook-form'


export const FormDemo2 = () => {
    const {register,handleSubmit} = useForm()
    const [userData,setuserData] = useState({})
    const [isSubmited,setisSubmited]= useState(false)

    const submitHandler =(data) =>{
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>NAME</label>
            <input type="text" placeholder="name" {...register("name")}/><br/>
            <label>Contact</label>
            <input type="number" placeholder="contact" {...register("contact")}/><br/>
            <label>Email</label>
            <input type="email" placeholder="email" {...register("email")}/><br/>
            <label>Password</label>
            <input type="password" placeholder="password" {...register("password")}/><br/>
            <label>Confirm Password</label>
            <input type="password" placeholder="confirm password" {...register("confirmpassword")}/><br/>
            <input type="submit"/>
        </form>
        {
            isSubmited == true && <div>
            <h1>OUTPUT</h1>
            <h3>Name = {userData.name}</h3>
            <h3>Contact = {userData.contact}</h3>
            <h3>Email = {userData.email}</h3>
            <h3>Password = {userData.password}</h3>
            <h3>Confirm Password = {userData.confirmpassword}</h3>
            </div>
        }
    </div>
  )
}
