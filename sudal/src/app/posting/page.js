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
            <button onClick={()=>
            // 요청보냄
                fetch('/api/posts/post',{
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        content: content
                    })
                })
                .then((r)=>{
                    if(!r.ok){
                        return r.json().then((err)=>{
                            throw new Error(err)
                        })
                    }
                    return alert('게시글이 작성되었습니다.')
                })
                .catch((err)=>{
                    alert(err.message)
                })
            }>
                작성
            </button>
            </div>
    )
}