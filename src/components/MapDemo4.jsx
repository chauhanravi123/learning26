import React from 'react'

export const MapDemo4 = () => {
    var cities = [
        {id:1,name:"Ahemdabad",population:8900000,aqi:150},
        {id:2,name:"Surat",population:6000000,aqi:160},
        {id:3,name:"Vadodara",population:3000000,aqi:120}
    ]
  return (
    <div>
        <h1>MapDemo4</h1>
        <table border='2' cellPadding='10' bordercolor="blue">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>   
                    <th>Population</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((c)=> {
                        return <tr>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.population}</td>
                            <td style= {{ color : c.aqi>140 ? "red" : "green" }}>{c.aqi}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
