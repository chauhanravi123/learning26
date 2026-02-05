import React from 'react'

export const MapDemo5 = () => {
    var students = [
        {id:1,name:"Alice",marks:85,age:18,city:"New York",gender:"F"},
        {id:2,name:"Bob",marks:55,age:19,city:"Los Angeles",gender:"M"},
        {id:3,name:"Charlie",marks:90,age:20,city:"Chicago",gender:"M"},
        {id:4,name:"Diana",marks:75,age:17,city:"Houston",gender:"F"},
        {id:5,name:"Ethan",marks:60,age:21,city:"Phoenix",gender:"M"}
    ]
  return (
    <div>
        <h1>MapDemo5</h1>
        <table border ='2' cellPadding='10' bordercolor="purple" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                     students.map((s)=>{
                        return <tr>
                            <td style={{color:"aqua"}}>{s.id}</td>
                            <td style={{color:"yellow" }}>{s.name}</td>
                            <td style={{ color: s.marks > 80 ? "green" : "red" }}>{s.marks}</td>
                            <td style={{color: s.age > 18 ? "blue" : "orange" }}>{s.age}</td>
                            <td style={{color:"purple"}}>{s.city}</td>
                            <td style={{ color: s.gender === "M" ? "lightblue" : "pink" }}>{s.gender}</td>
                        </tr>
                     })
                }
            </tbody>
        </table>
    </div>
  )
}
