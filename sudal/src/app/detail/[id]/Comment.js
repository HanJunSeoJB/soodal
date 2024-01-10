'use client';
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
            <div className="w-full h-32 border border-grey mt-3 flex flex-col justify-center shadow-lg">
                <div className="flex flex-row items-center justify-between">
                        <input className="w-11/12 min-h-20 max-h-20 border border-grey ml-2.5" placeholder="댓글을 입력해주세요." onChange={(e)=>{ setComment(e.target.value) }} />
                        <button className="w-fit h-fit border-2 border-gray px-4 py-8 mr-6" onClick={()=>{ fetch('/api/posts/comment',
                        { 
                            method : 'POST',
                            body : JSON.stringify({comment: comment, postId: props._id}) 
                        }).then((r)=>{
                            if(r.ok){
                                return alert('댓글 작성 완료')
                            }
                        })
                    
                    }}>등록</button> 
                </div>
            </div>
            {/* 댓글 리스트 */}
            <div className='w-full flex flex-col'>
                {data.length > 0 ? data.map((commentData, i) => (
                    <CommentList key={i} data={commentData} />
                )) : '댓글 없음'}
            </div>
        </div>
    )
}
