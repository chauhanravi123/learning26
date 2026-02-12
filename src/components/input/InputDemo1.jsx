import React, { useState } from 'react'

export const InputDemo1 = () => {
    const [name,setName] = useState('');
    const [age,setage] = useState(0);
   
    const nameHandler = (event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    }
    const ageHandler = (event) =>{
        setage(event.target.value);
        }
        return (
        <div style={{textAlign:'center'}}>
            <h1>InputDemo1</h1>
            <div>
                <label>Name</label>
                <input type='text' onChange={(event) => nameHandler(event)} /><br/><br/>
            </div>
            <div>
                <label>Age</label>
                <input type='number' onChange= {(event) => ageHandler(event)} /><br/><br/>
            </div>
        </div>
        )      
    }
