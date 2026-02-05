import React from 'react'

export const MapDemo3 = () => {
    var students = [
        {id:1,name:"Amit",marks:85,grade:"A",city:"Delhi",gender:"M"},
        {id:2,name:"Vijay",marks:75,grade:"B",city:"Bangalore",gender:"M"},
        {id:3,name:"Suresh",marks:65,grade:"C",city:"Mumbai",gender:"M"}
    ]
  return (
    <div>
        <h2>MapDemo3</h2>
        <table border ='2' cellPadding='10' bordercolor="grey">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Grade</th>
                    <th>City</th>   
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((s)=> {
                        return <tr>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td style= {{ color : s.marks>70 ? "green" : "red" }}>{s.marks}</td>
                            <td>{s.grade}</td>
                            <td>{s.city}</td>
                            <td>{s.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
