'use client';
import {useState} from 'react'

export default function Comment(props) {
    let [comment, setComment] = useState('')

    return (
        <div>
            <input onChange={(e)=>{ setComment(e.target.value) }} />
            <button onClick={()=>{ fetch('/api/posts/comment',
            { 
                method : 'POST',
                body : JSON.stringify({comment: comment, postId: props._id}) 
            }).then((r)=>{
                if(r.ok){
                    return alert('댓글 작성 완료')
                }
            })
        
        }}>댓글전송</button>
        </div>
    )
}
