import { connectDB } from "../../../util/database";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }

    const db = (await connectDB).db('posts')
    let boardId = (await db.collection('board').findOne({boardName: req.query.board}))._id

    console.log(boardId)

    const result = await db.collection('post').find({_id: new ObjectId(boardId)}).toArray();

    
    res.status(200).json(result)
}