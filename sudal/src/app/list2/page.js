'use client';

import { useState, useEffect } from 'react';

export default function List() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('api/posts/get',{
            method: 'GET'
        })
            .then(r => {
                if (!r.ok) {
                    throw new Error('Failed to fetch posts');
                }
                return r.json();
            })
            .then(data => {
                setPosts(data);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }, []);

    if (!posts) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}
