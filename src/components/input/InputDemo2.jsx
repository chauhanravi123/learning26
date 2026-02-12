import React,{useState} from 'react'


export const InputDemo2 = () => {
    const [name,setname]= useState("")
    const [gender,setgender]= useState("")
    const [country,setcountry]= useState("")
    const nameHandler=(event)=>{
        setname(event.target.value)
    }
    const genderHandler=(event)=>{
        setgender(event.target.value)
    }
  return (

    <div style={{textAlign:'center'}}>
        <h1>InputDemo2</h1>
        <div>
            <label>Name</label>
            <input type='text'  onChange={(event)=>nameHandler(event)}/>
            {name}
        </div>
        <div>
            <label>Gender</label>
           Male: <input type="radio" value="male"name="gender" onChange={(event) => genderHandler(event)}/><br/>
           Female: <input type="radio" value="female" name="gender" onChange={(event)=>genderHandler(event)}/>
           <h1>{gender}</h1>
        </div>
        <div>
            <label>Country</label>
            <select onChange={(event)=>{setcountry(event.target.value)}}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select>
            {country}
        </div>
    
        
    </div>
  )
}
