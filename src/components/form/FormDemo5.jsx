import React from 'react';
import { useForm } from 'react-hook-form';
export const FormDemo5 = () => { 
    const {register,handleSubmit,formState:{errors}}=useForm({mode:"all"})
    const submitHandler=(data)=>{
        console.log(data)
    }
    const validationSchema={
        namevalidatior:{
            required:{
            value:true,
            message:"Name is required"
            }
 
        },
        contactvalidator:{
            required:{
            value:true,
            message:"Contact is required"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Contact should be 10 digit and start with 6-9"
            }
        },
        promoCodevalidator:{
            required:{
            value:true,
            message:"Promo code is required"
            },
            validate(params){
                return params==="2026" || "Promo code should be 2026"
            }
        },
        hobbiesvalidator:{
            required:{
            value:true,
            message:"Hobbies is required"
            },
            validate(params){
                return params?.length>=2 || "Select at least 2 hobbies"
            }   
        }
    }
  return (
    <div style={{width:"500px",margin:"auto"}}>
        <h2>Form Demo 5</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" {...register("name",validationSchema.namevalidatior)}></input>
                <p style={{color:"red"}}>{errors.name?.message}</p>
            </div>
            <div class="form-group">
                <label>Contact</label>
                <input type="text" class="form-control" {...register("contact",validationSchema.contactvalidator)}></input>
                <p style={{color:"red"}}>{errors.contact?.message}</p>
            </div>
            <div class="form-group">
                <label>Promo Code</label>
                <input type="text" class="form-control" {...register("promoCode",validationSchema.promoCodevalidator)}></input>
                <p style={{color:"red"}}>{errors.promoCode?.message}</p>
            </div>
            <div class="form-group">
                <label>Hobbies</label><br></br>
                <input type="checkbox" {...register("hobbies",validationSchema.hobbiesvalidator)} value="Reading"></input>
                <label>Reading</label><br></br>
                <input type="checkbox" {...register("hobbies",validationSchema.hobbiesvalidator)} value="Traveling"></input>
                <label>Traveling</label><br></br>
                <input type="checkbox" {...register("hobbies",validationSchema.hobbiesvalidator)} value="Cooking"></input>
                <label>Cooking</label><br></br>
                <p style={{color:"red"}}>{errors.hobbies?.message}</p>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )       
}
