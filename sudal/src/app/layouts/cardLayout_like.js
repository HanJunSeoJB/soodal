'use client';

import { BiLike } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function CardLayoutLike(props) {
    let [like, setLike] = useState('0')
    useEffect(()=>{
        fetch('/api/posts/getLike?id=' + props._id).then(r=>r.json()).then((result)=>{
            setLike(result.length.toString())
        })
    },[])

    return (
        <div className="w-fit h-fit flex flex-col shrink-0 border shadow-lg rounded-lg items-center">
            <p className="mt-4 px-3.5">추천해요</p>
            <button 
            className="w-full h-full flex justify-center"
            onClick={()=>{ fetch('/api/posts/like',
                        { 
                            method : 'POST',
                            body : JSON.stringify({parent: props._id, author: props.author}) 
                        }).then((r)=>{
                            if(r.ok){
                                fetch('/api/posts/getLike?id=' + props._id).then(r=>r.json()).then((result)=>{
                                    setLike(result.length.toString())
                                    })
                            }
                        })
                    
                    }}>
                <BiLike className="w-3/5 h-3/5 mt-2.5" color="#005CA6"/>
            </button>
            <p className="mt-1.5 mb-4">{like}</p>
        </div>
    )
}