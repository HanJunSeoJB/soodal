'use client'

import Image from 'next/image' 
import best from '../../../../public/images/best.png'
import tag from '../../../../public/images/tag.png'
import { BiLike } from "react-icons/bi";
import { RiMore2Line } from "react-icons/ri";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { useState, useEffect } from 'react';
import ReplyList from './ReplyList';

export default function CommentList({isLike, comment, author, createdAt, like, _id}) {
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [reply, setReply] = useState('');
    let [replyDatas, setDatas] = useState([])
    let [likeData, setLikeData] = useState(like)

    useEffect(()=>{
        fetch('/api/posts/getReply?id=' + _id).then(r=>r.json()).then((result)=>{
            setDatas(result)
        })
    },[])

    const toggleReplyInput = () => {
        setShowReplyInput(!showReplyInput);
    };

    return (
        <div className='flex flex-col mt-8'>
            <div className="w-full h-fit flex flex-row items-center justify-between font-['Pretendard']">
                <div className='flex flex-row items-center'>
                    {isLike && <Image src={best} alt="Best" width={50} height={50}  className='mx-2'/>}
                    <p>{author}</p>
                    <p className='ml-3.5'>{timeSince(createdAt)}</p>
                    <button onClick={()=>{ fetch('/api/posts/like',
                        { 
                            method : 'POST',
                            body : JSON.stringify({like: like+1, commentId: _id}) 
                        }).then((r)=>{
                            if(r.ok){
                                fetch('/api/posts/getComment?id=' + _id).then(r=>r.json()).then((result)=>{
                                    setLikeData(result.like)
                                })
                            }
                        })
                    
                    }}>
                        <BiLike className="w-fit h-fit ml-3.5" color="#005CA6"/>
                    </button>

                    <p className='ml-1'>{likeData}</p>
                </div>
                <div className='flex flex-row'>
                    <button onClick={toggleReplyInput}>답글달기</button>
                    
                    <button>
                        <BiLike className="w-6 h-6y mx-7" />
                    </button>
                    <Dropdown>
                            <DropdownTrigger>
                            <button>
                                <RiMore2Line className="w-fit h-fit" />
                            </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions" className="border border-black cursor-pointer bg-white"
                            onAction={(key) => setCurrentFont(key)}
                            >
                                <DropdownItem key="신고하기" className="font-['맑은 고딕'] border-b border-black">신고하기</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                </div>
            </div>
            <p className="mt-3 font-['Pretendard']">{comment}</p>
            {/*긴 막대 바 */}
            <div className="border border-darkgrey my-5"/>

            {/* 답글 입력창 */}
            {showReplyInput &&
            <div className='flex flex-row items-center'>
                <Image src={tag} className='w-auto h-auto'></Image>
                <div className="w-full flex flex-row items-center justify-between">
                        <input value={reply} className="w-11/12 min-h-20 max-h-20 border border-grey ml-2.5 pl-6" placeholder="댓글을 입력해주세요." onChange={(e)=>{ setReply(e.target.value) }} />
                        <button className="w-1/12 h-fit border-2 border-gray py-8 mx-6" onClick={()=>{ fetch('/api/posts/reply',
                        { 
                            method : 'POST',
                            body : JSON.stringify({comment: reply, postId: _id}) 
                        }).then((r)=>{
                            if(r.ok){
                                setReply('')
                                fetch('/api/posts/getReply?id=' + _id).then(r=>r.json()).then((result)=>{
                                    setDatas(result)
                                })
                                alert('등록되었습니다.')
                                setShowReplyInput(false)
                            }
                        })
                    
                    }}
                    >등록</button> 
                </div>
            </div>
            }
            {/* 답글 리스트 */}
            <div className='w-full flex flex-col'>
                {replyDatas.map((replyData, i) => (
                    <ReplyList
                    key={i}
                    isLike = {replyData.isLike}
                    comment = {replyData.comment}
                    author = {replyData.author}
                    createdAt = {replyData.createdAt}
                    like = {replyData.like} />
                ))}
            </div>
        </div>
    )
}

function timeSince(date) {
    const commentDate = new Date(date)
    const now = new Date();
    const differenceInMinutes = Math.floor((now - commentDate) / 60000); // 밀리초를 분으로 변환

    if (differenceInMinutes < 60) {
        return `${differenceInMinutes}분 전`;
    } else if (differenceInMinutes < 24 * 60) {
        return `${Math.floor(differenceInMinutes / 60)}시간 전`;
    } else {
        return `${Math.floor(differenceInMinutes / (24 * 60))}일 전`;
    }
}
