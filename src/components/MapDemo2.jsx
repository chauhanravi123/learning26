import React from 'react'

export const MapDemo2 = () => {
    var users = [
        {id:1,name:"Jay",age:24,city:"Mumbai"},
        {id:2,name:"Yogesh",age:25,city:"Pune"},
        {id:3,name:"Pranav",age:26,city:"Chennai"}
    ]
  return (
    <div>
        <h1>MapDemo2</h1>
        {users.map((user)=> {
            return <li key={user.id}>{user.id}-{user.name}-{user.age}-{user.city}</li>
        })}
        </div>
  )
}
