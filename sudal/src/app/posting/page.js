'use client'

import { useState } from "react"

export default function Posting(){
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    return(
        <div>
            <h1>Posting</h1>
            <input onChange={(e)=>{setTitle(e.target.value)}}></input><br/>
            <input onChange={(e)=>{setContent(e.target.value)}}></input><br/>
            <button onClick={()=>{
                fetch('/api/posts/post', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        content: content
                    })
                })
            }}>
                글 쓰기
            </button>
        </div>
    )
}