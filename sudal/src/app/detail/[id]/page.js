// 'use client'

import { sanitize, isSupported } from "isomorphic-dompurify";
import { connectDB } from "../../../../util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props){

    const db = (await connectDB).db('posts')
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

    return(
        <div >
            <h4>상세페이지</h4>
            <h4 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(result.title, { ALLOWED_TAGS: ['p', 'b', 'i', 'u', 'img', 'a'] })}} />
            <p dangerouslySetInnerHTML={{ __html:  DOMPurify.sanitize(result.content, { ALLOWED_TAGS: ['p', 'b', 'i', 'u', 'img', 'a'] })}} />
        </div>
    )
}
