import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo6 = () => {
    const {register,handleSubmit,formState:{errors},watch}=useForm({mode:"onChange"});
    const password=watch("password")
    console.log("Watching...,",password)

    const validationSchema={
        passwordvalidator:{
            required:{
                value:true,
                message:"Password is required"
            },
            pattern:{
               value:/[A-Z]+[a-z]+[0-9]+[@#$%^&*]+/,
               message:"Password should contain at least 1 uppercase, 1 lowercase, 1 digit and 1 special character" 
            }
        },
        confirmpasswordvalidator:{
            required:{
                value:true,
                message:"Confirm password is required"
            },
            validate (params){
                return params===password || "Confirm password should match with password"
            }
        }
    
    };
    const submitHandler=(data)=>{
        console.log(data);
    };
  return (
    <div style={{padding:"20px"}}>
        <h1>Password Validation Demo</h1>
        <form onsubmit={handleSubmit(submitHandler)}>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" {...register("password",validationSchema.passwordvalidator)}></input>
                <p style={{color:"red"}}>{errors.password?.message}</p>
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" {...register("confirmpassword",validationSchema.confirmpasswordvalidator)}></input>
                <p style={{color:"red"}}>{errors.confirmpassword?.message}</p>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
