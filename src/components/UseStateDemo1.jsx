import React from 'react'
import  {useState} from 'react'

export const UseStateDemo1 = () => {
        //var count=0;
        const[count,setCount] = useState(0)
        // count --> set variable
        //setCount --> setter function it will update state variable
        //useState(0) -->0 will act as intial value 
        const increaseCount = ()=> {
            //console.log('count before increase',count)
            //count++;
            setCount(count+1)
            console.log('count after increase',count)
        }

  return (
    <div style={{textAlign:'center'}}>
    <h1>Use State Demo1</h1> 
    <h1>count = {count}</h1>  
    <button onClick={increaseCount}>+</button>
    </div>
  )
}
