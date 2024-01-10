'use client';

import { BiLike } from "react-icons/bi";
import { useState } from "react";

export default function CardLayoutLike() {
    let [like, setLike] = useState(0)
    return (
        <div className="w-fit h-fit flex flex-col shrink-0 border shadow-lg rounded-lg items-center">
            <p className="mt-4 px-3.5">추천해요</p>
            <button 
            className="w-full h-full flex justify-center"
            onClick={() => setLike(like + 1)}>
                <BiLike className="w-3/5 h-3/5 mt-2.5" color="#005CA6"/>
            </button>
            <p className="mt-1.5 mb-4">0</p>
        </div>
    )
}