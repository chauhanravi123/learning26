import React from 'react'

export const MapDemo7 = () => {
    let Grocery=[
        {id:1,name:"Rice",price:101,quantity:"1kg",category:"Grains",brand:"Aashirvaad"},
        {id:2,name:"Wheat-Flour",price:250,quantity:"5kg",category:"Grains",brand:"Patanjali"},
        {id:3,name:"Sugar",price:45,quantity:"1kg",category:"Sweeteners",brand:"Tata"},
        {id:4,name:"Salt",price:20,quantity:"1kg",category:"Spices",brand:"Annapurna"},
        {id:5,name:"Cooking-Oil",price:150,quantity:"1L",category:"Oils",brand:"Fortune"},
        {id:6,name:"Tea",price:120,quantity:"250gm",category:"Beverages",brand:"Tata"},
        {id:7,name:"Coffee",price:200,quantity:"250gm",category:"Beverages",brand:"Nescafe"},
        {id:8,name:"Salted-Biscuits",price:30,quantity:"200gm",category:"Snacks",brand:"Britannia"},
        {id:9,name:"Chocolates",price:150,quantity:"100gm",category:"Snacks",brand:"Cadbury"},
        {id:10,name:"Instant-Noodles",price:40,quantity:"70gm",category:"Snacks",brand:"Maggi"}
    ]
  return (
    <div>
        <h1>Map Demo 7</h1>
        <table border='2' cellPadding='10' cellSpacing='10'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Brand</th>  
                </tr>
            </thead>
            <tbody>
                {
                    Grocery.map((item)=>{
                        return <tr>
                            <td style={{ backgroundColor: '#f0f0f0' }}>{item.id}</td>
                            <td style={{ backgroundColor: '#e0e0e0' }}>{item.name}</td>
                            <td style={{ backgroundColor: item.price > 100 ? '#ffcccc' : '#ffffff' }}>{item.price}</td>
                            <td style={{ color: item.quantity.includes('kg') ? 'green' : 'blue' }}>{item.quantity}</td>
                            <td style={{ fontStyle: item.category === "Grains" ? "normal" : "oblique"}}>{item.category}</td>
                            <td style={{ fontWeight: item.brand === "Tata" ? "bold" : "normal" }}>{item.brand}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
