import React from 'react'

export const MapDemo10 = () => {
    let schools = [
        {id:1,name:"Greenwood High",location:"New York",type:"Public",students:1200,established:1995},
        {id:2,name:"Sunrise Academy",location:"Los Angeles",type:"Private",students:800,established:2005},
        {id:3,name:"Riverdale School",location:"Chicago",type:"Public",students:950,established:1980},
        {id:4,name:"Hilltop Institute",location:"Houston",type:"Private",students:600,established:2010},
        {id:5,name:"Lakeside College",location:"Miami",type:"Public",students:1100,established:1975}
    ]
  return (
    <div>
        <h1>Map Demo 10</h1>
        <table border='2' cellPadding='10' cellSpacing='0' align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Number of Students</th>
                    <th>Established Year</th>
                </tr>
            </thead>
            <tbody>
                {
                    schools.map((school)=>{
                        return <tr>
                            <td>{school.id}</td>
                            <td style={{color:'blueviolet'}}>{school.name}</td>
                            <td style={{backgroundColor: school.location==="Chicago" ? "lightblue" : "white"}}>{school.location}</td>
                            <td style={{color: school.type === "Public" ? "green" : "Pink"}}>{school.type}</td>
                            <td style={{color: school.students > 100 ? 'gray' : 'green'}}>{school.students}</td>
                            <td style={{color: school.established < 1990 ? 'red' : 'black'}}>{school.established}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
