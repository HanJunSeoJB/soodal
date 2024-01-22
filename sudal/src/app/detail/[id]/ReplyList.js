'use client'
import Image from 'next/image' 
import best from '../../../../public/images/best.png'
import tag from '../../../../public/images/tag.png'
import { BiLike } from "react-icons/bi";
import { RiMore2Line } from "react-icons/ri";
import { useState, useEffect } from 'react';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import ListButton from "../../layouts/ListButton"

export default function CommentList({isLike, comment, author, createdAt, _id}) {
    let [currentReplyLike, setReplyLike] = useState('0');

    useEffect(()=>{
        fetch('/api/posts/getLike?id=' + _id).then(r=>r.json()).then((result)=>{
            setReplyLike(result.count.toString())
        })
    },[])

    return (
        <div className='w-full flex flex-row items-center'>
            <Image src={tag} className='w-auto h-auto mr-6'></Image>
            <div className='w-full flex flex-col mt-8'>
                <div className="w-full h-fit flex flex-row items-center justify-between font-['Pretendard']">
                    <div className='flex flex-row items-center'>
                        {isLike && <Image src={best} alt="Best" width={50} height={50}  className='mx-2'/>}
                        <p>{author}</p>
                        <p className='ml-3.5'>{timeSince(createdAt)}</p>
                        <BiLike className="w-fit h-fit ml-3.5" color="#005CA6"/>
                        <p className='ml-1'>{currentReplyLike}</p>
                    </div>
                    <div className='flex flex-row'>
                    <button onClick={()=>{ fetch('/api/posts/like',
                        { 
                            method : 'POST',
                            body : JSON.stringify({parent: _id, author: author}) 
                        }).then((r)=>{
                            if(r.ok){
                                fetch('/api/posts/getLike?id=' + _id).then(r=>r.json()).then((result)=>{
                                    setReplyLike(result.count.toString())
                                    })
                            }
                        })
                    
                    }}>
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
