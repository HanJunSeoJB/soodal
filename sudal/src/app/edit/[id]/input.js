'use client'

import { useState } from "react"

export default function Input(props){
    let [title, setTitle] = useState(props.post.title)
    let [content, setContent] = useState(props.post.content)
    return(
        <div>
            <input defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
            <input defaultValue={content} onChange={(e)=>{setContent(e.target.value)}}/><br/>
            <button onClick={()=>{
                props.post.title = title
                props.post.content = content
                fetch('/api/posts/put',{
                    method: 'PUT',
                    body: JSON.stringify(props.post)
                }).then((r)=>{
                    if(!r.ok){
                        return r.json().then((err)=>{
                            throw new Error(err)
                        })
                    }
                    return alert('게시글이 수정되었습니다.')
                }).catch((err)=>{
                    alert(err.message)
                })
            }}>
                수정
            </button>
        </div>
    )
}