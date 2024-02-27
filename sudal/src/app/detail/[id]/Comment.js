'use client'
import {useState, useEffect} from 'react'
import CommentList from './CommentList'

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false); // 모달 표시 상태
    const [modalMessage, setModalMessage] = useState(''); // 모달에 표시할 메시지
    useEffect(()=>{
        fetch('/api/posts/getComment?id=' + props._id,{cache: 'no-cache'}).then(r=>r.json()).then((result)=>{
        setData(result)
        })
    },[])

    return (
        <div>
            <div className="w-full h-32 border-0.5 border-grey mt-3 flex flex-col justify-center shadow-lg">
                <div className="mt-5 w-full flex flex-row items-center justify-between">
                        <input
                        value={comment}
                        className="w-11/12 min-h-20 max-h-20 border-0.5 shadow border-grey ml-5 pl-6"
                        placeholder="댓글을 입력해주세요."
                        onChange={(e)=>{ setComment(e.target.value) }}
                        maxLength={200} />
                        <button className="w-16 h-20 border-0.5 border-grey py-8 mx-6 font-['PretendardMedium'] text-sm shadow" onClick={()=>{ fetch('/api/posts/comment',
                        { 
                            method : 'POST',
                            body : JSON.stringify({comment: comment, postId: props._id}) 
                        }).then(async (r)=>{
                            if(r.ok){
                                fetch('/api/posts/getComment?id=' + props._id).then(r=>r.json()).then((result)=>{
                                    setData(result)
                                    })
                                setComment('')
                                alert('등록되었습니다.')
                            }else if (r.status === 400) {
                                const message = await r.text();
                                setModalMessage(message);
                                setShowModal(true); // 모달 표시
                            }
                        })
                    
                    }}
                    >등록</button> 
                </div>
                <p className="ml-5 mb-3 mt-2 font-['PretendardMedium'] text-xs color-[#BBBBBB]">{comment.length}/200</p>
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
            {/* 모달 표시 */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <p>{modalMessage}</p>
                        <button onClick={() => setShowModal(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    )
}