'use client'

import { useState } from "react"

export default function Posting(){

    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [boardName, setBoardName] = useState('free')
    return(
        <div>
            <h1>Posting</h1>
            <input onChange={(e)=>{setTitle(e.target.value)}}></input><br/>
            <input onChange={(e)=>{setContent(e.target.value)}}></input><br/>
            <select onChange={(e)=>{setBoardName(e.target.value)}}> {/* 게시판 종류 선택 드롭다운 메뉴 */}
                <option value="free">자유게시판</option>
                <option value="qna">qna게시판</option>
                <option value="information">정보게시판</option>
            </select><br/>
            <button onClick={()=>
            // 요청보냄
                fetch('/api/posts/post',{
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        content: content,
                        boardName: boardName
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