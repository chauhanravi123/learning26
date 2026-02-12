import React from 'react'
import { CardComponent } from './CardComponent'

export const FunctionDemo1 = () => {
    const test = ()=>{
        alert("Test Function Called...")
    }
    const test2 = (x)=>{
        alert("Value Of x is "+x)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Function Demo 1</h1>
        <button onClick={test} >Click</button>
        <button onClick={test2(5)}>Click 2</button>
        <button onClick={()=>test2(10)}>Click 3</button>
         <CardComponent title="Card Title" description="This is a card description." />  
    </div>
  )
}
