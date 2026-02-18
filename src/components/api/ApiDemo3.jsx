import React,{useState} from 'react'
import axios from 'axios'

export const ApiDemo3 = () => {
    const [message,setmessage] = useState("")
    const [comments,setcomments] = useState([])
    const getComments = async()=>{
            const response = await axios.get("https://dummyjson.com/comments")
            console.log(response)
            console.log(response.data)
            setmessage(response.data.message)
            console.log(response.data.comments)
            setcomments(response.data.comments)
            get()

    }

  return (
    <div style={{padding: "20px",textAlign:"center"}}>
        <h1>API DEMO 3</h1>
        <button onClick={getComments}>Get Comments</button>
        <p>{message}</p>
        {
            <table className="table" style={{border:"1px solid black"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Body</th>
                        <th>PostId</th>
                        <th>Likes</th>
            
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((comment)=>{
                            return <tr>
                                <td>{comment.id}</td>
                                <td>{comment.body}</td>
                                <td>{comment.postId}</td>
                                <td>{comment.likes}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        }
    </div>
  )
}
