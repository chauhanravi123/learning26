import React from 'react'

export const MapDemo1 = () => {
    let cars =["Tata","Mahindra","Hyundai","Kia","Maruti"]
  return (
    <div>
        <h1>MapDemo1</h1>
        { cars.map( (car, index) => <p key={index}>{index} : {car}</p> )    }
        </div>
    
  )
}
