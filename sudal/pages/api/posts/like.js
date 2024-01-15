import { connectDB } from "../../../util/database"
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }
    
    const db = (await connectDB).db('posts')
    let data = JSON.parse(req.body)
    let commentId = data.commentId

    await db.collection('comment').updateOne(
        { _id: new ObjectId(commentId) },
        { $set: { like: data.like } }
      );
    return res.status(200).json('좋아요가 반영되었습니다.')
    
}