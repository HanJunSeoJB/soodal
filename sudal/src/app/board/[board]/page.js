'use client'

import { useEffect, useState } from "react"

export default function List(props){

    let [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/api/posts/get?board=' + props.params.board)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                alert('존재하지 않는 게시판입니다.');
            });
    }, [])
    
    
    return(
        <div>
            <h1>LIST</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}