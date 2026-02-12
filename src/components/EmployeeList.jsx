import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
    console.log("EmployeeList",props)
    //props ->property
    //props ->keyword not
    //props -> datatype -> object

  return (
    <div style={{textAlign:'center'}}>
        <h1>Employee List</h1>
        {props.title}
        <h1>{props.company.name}</h1>
        <h1>{props.company.year}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {
                props.employees.map((emp)=>{
                    return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                    </tr>
                })
       }
            </tbody>        
        </table>
        <SubEmployeeList title={props.title} />
    </div>
  )
}