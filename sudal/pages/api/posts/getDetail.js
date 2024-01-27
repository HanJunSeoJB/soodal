import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }

    fetch(`http://localhost:3000/api/posts/view?id=${req.query.id}`, 
    {cache: 'no-cache'})
    const db = (await connectDB).db('posts')
    const result = await db.collection('post').findOne({_id: new ObjectId(req.query.id)})
    res.status(200).json(result)
}