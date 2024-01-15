'use client'
import {useState, useEffect} from 'react'
import CommentList from './CommentList'

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    useEffect(()=>{
        fetch('/api/posts/getComment?id=' + props._id).then(r=>r.json()).then((result)=>{
        setData(result)
        })
    },[])

    return (
        <div>
            <div className="w-full h-32 border-2 border-grey mt-3 flex flex-col justify-center shadow-lg">
                <div className="w-full flex flex-row items-center justify-between">
                        <input value={comment} className="w-11/12 min-h-20 max-h-20 border border-grey ml-2.5 pl-6" placeholder="댓글을 입력해주세요." onChange={(e)=>{ setComment(e.target.value) }} />
                        <button className="w-1/12 h-fit border-2 border-gray py-8 mx-6" onClick={()=>{ fetch('/api/posts/comment',
                        { 
                            method : 'POST',
                            body : JSON.stringify({postId: props._id}) 
                        }).then((r)=>{
                            if(r.ok){
                                fetch('/api/posts/getComment?id=' + props._id).then(r=>r.json()).then((result)=>{
                                    setData(result)
                                    })
                                setComment('')
                                alert('등록되었습니다.')
                            }
                        })
                    
                    }}
                    >등록</button> 
                </div>
            </div>
            {/* 댓글 리스트 */}
            <div className='w-full flex flex-col'>
                {data.map((commentData, i) => (
                    <CommentList
                    key={i}
                    isLike = {commentData.isLike}
                    comment = {commentData.comment}
                    author = {commentData.author}
                    createdAt = {commentData.createdAt}
                    _id = {commentData._id} />
                ))}
            </div>
        </div>
    )
}