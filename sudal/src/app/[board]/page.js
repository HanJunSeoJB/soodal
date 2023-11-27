'use client'

import { useEffect, useState } from "react"

export default function List(props){

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('/api/posts/get?board='+props.params.board)
        .then(r=>r.json())
        .then(data=>{
            setPosts(data)
        })
    },[])
    
    return(
        <div>
            <h1>LIST</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}