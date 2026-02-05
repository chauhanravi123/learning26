import React from 'react'

export const MapDemo8 = () => {
    var Result= [
        {id:1,name:"Ajay",totalsub:5,total:"450",grade:"A",status:"Pass",percentage:90},
        {id:2,name:"Vijay",totalsub:5,total:"380",grade:"B",status:"Pass",percentage:76},
        {id:3,name:"Sanjay",totalsub:5,total:"290",grade:"C",status:"Pass",percentage:58},
        {id:4,name:"Ravi",totalsub:5,total:"150",grade:"D",status:"Fail",percentage:30},
        {id:5,name:"Rahul",totalsub:5,total:"480",grade:"A+",status:"Pass",percentage:96}
    ]
  return (
    <div>
        <h1>Map Demo 8</h1>
        <table border='2' cellPadding='10' cellSpacing='0'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Total Subjects</th>
                    <th>Total Marks</th>
                    <th>Grade</th>
                    <th>Status</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                {
                    Result.map((student)=>
                    {
                        return <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td >{student.totalsub}</td> 
                            <td style={{ color: student.total < 200 ? 'red' : 'grey'}}>{student.total}</td>
                            <td style={{ color: student.grade === 'A+' ? 'green' : student.grade === 'A' ? 'blue' : 'black'}}>{student.grade}</td>
                            <td style={{ color: student.status === 'Pass' ? 'green' : 'red'}}>{student.status}</td>
                            <td style={{backgroundColor: student.percentage > 80 ? 'lightgreen' : student.percentage > 60 ? 'yellow' : 'lightcoral'}}>{student.percentage} %</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
