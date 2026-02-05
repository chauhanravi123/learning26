    import React from 'react'
    import apple from '../assets/images/apple.jpeg'
    import banana from '../assets/images/banana.jpeg'
    import orange from '../assets/images/Orange.jpeg'
    import grapes from '../assets/images/Graps.jpeg'
    import mango from '../assets/images/Mango.jpeg'

    export const MapDemo9 = () => {
        let fruits = [
            {id:1,name:"Apple",color:"Red",taste:"Sweet",avalilable:true,quantity:50,img:apple},
            {id:2,name:"Banana",color:"Yellow",taste:"Sweet",avalilable:true,quantity:100,img:banana},
            {id:3,name:"Orange",color:"Orange",taste:"Sweet",avalilable:false,quantity:75,img:orange},
            {id:4,name:"Grapes",color:"Green",taste:"Sweet",avalilable:true,quantity:200,img:grapes},
            {id:6,name:"Mango",color:"Yellow",taste:"Sweet-sour",avalilable:true,quantity:150,img:mango}
        ]
    return (
        <div>
            <h1>Map Demo 9</h1>
            <table border='2' cellPadding='10' cellSpacing='0' align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Taste</th>
                        <th>Available</th>
                        <th>Quantity</th>
                        <th>Image</th>
                    </tr>
                </thead>     
                <tbody>
                    {
                        fruits.map((fruit)=>{
                            return <tr>
                                <td>{fruit.id}</td>
                                <td>{fruit.name}</td>
                                <td style={{backgroundColor: fruit.color.toLowerCase()}}>{fruit.color}</td>
                                <td style={{ color: fruit.taste === 'Sweet' ? 'green' : fruit.taste === 'Sour' ? 'yellow' : 'orange'}}>{fruit.taste}</td>
                                <td style={{ color: fruit.avalilable ? 'green' : 'red'}}>{fruit.avalilable ? 'Yes' : 'No'}</td>
                                <td style={{ fontWeight: fruit.quantity > 100 ? 'bold' : 'normal'}}>{fruit.quantity}</td>
                                <td style={{width:'25px', height:'25px'}}><img src={fruit.img} alt={fruit.name} width="25" height="25"/></td>
                            </tr>
                        })
                    }
                </tbody>  
            </table>
        </div>
    )
    }
