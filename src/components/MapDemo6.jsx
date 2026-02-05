import React from 'react'

export const MapDemo6 = () => {
    var electronicproducts = [
        {id:1, name:"Laptop", price:1000,compny:"Dell", color:"Silver", weight:"2kg",width:"15inch"},
        {id:2, name:"Phone", price:500, compny:"Apple", color:"Black", weight:"200gm",width:"6inch"},
        {id:3, name:"Tablet", price:300,compny:"Samsung", color:"White", weight:"400gm",width:"8inch"},
        {id:4, name:"Monitor", price:200,compny:"LG", color:"Black", weight:"3kg",width:"20inch"},
        {id:5, name:"Smartwatch", price:150,compny:"Fitbit", color:"Blue", weight:"100gm",width:"1.5inch"},
        {id:6, name:"Headphones", price:100,compny:"Sony", color:"Red", weight:"250gm",width:"N/A"}
    ]
  return (
    <div>
        <h1>Map Demo 6</h1>
        <table border='2' cellPadding='10' cellSpacing='0'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Compny</th>
                    <th>Color</th>
                    <th>Weight</th>
                    <th>Width</th>
                </tr>
            </thead>
            <tbody>
                {
                    electronicproducts.map((product) => {
                        return <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td style={{ color: product.price> 500 ? 'red' : 'black'}}>{product.price}</td>
                            <td style={{ backgroundColor: product.compny === "Apple" ? 'yellow' : 'white'}}>{product.compny}</td>
                            <td style={{ color: product.color === "Black" ? 'white' : 'black', backgroundColor: product.color === "Black" ? 'black' : 'white'}}>{product.color}</td>
                            <td style={{ fontWeight: product.weight === "3kg" ? 'bold' : 'normal'}}>{product.weight}</td>
                            <td style={{ fontStyle: product.width === "N/A" ? 'italic' : 'normal'}}>{product.width}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}