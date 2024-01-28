'use client';

import { BiLike } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function CardLayoutLike(props) {
    let [like, setLike] = useState('0')
    useEffect(()=>{
        fetch(`/api/posts/getLike?id=${props._id}&type=${props.type}`)
        .then(r => r.json())
        .then((result) => {
            setLike(result.count.toString());
        });
    },[])

    return (
        <div className="w-fit h-fit flex flex-col shrink-0 border shadow-lg rounded-lg items-center">
            {props.type === 'like' && <p className="mt-4 px-3.5">추천해요</p>}
            {props.type === 'scrap' && <p className="mt-4 px-5">스크랩</p>}

            <button 
            className="w-full h-full flex justify-center"
            onClick={()=>{ fetch('/api/posts/like',
                        { 
                            method : 'POST',
                            body : JSON.stringify({
                                parent: props._id,
                                author: props.author,
                                type: props.type
                            }) 
                        }).then((r)=>{
                            if(r.ok){
                                fetch(`/api/posts/getLike?id=${props._id}&type=${props.type}`)
                                .then(r => r.json())
                                .then((result) => {
                                    setLike(result.count.toString());
                                });
                            }
                        })
                    
                    }}>
                {props.type === 'like' && <BiLike className="w-3/5 h-3/5 mt-2.5" color="#005CA6"/>}
                {props.type === 'scrap' && <BiBookmark className="w-3/5 h-3/5 mt-2.5" color="red"/>}
            </button>
            <p className="mt-1.5 mb-4">{like}</p>
        </div>
    )
}