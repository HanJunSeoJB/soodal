import { connectDB } from "../../../util/database";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }

    const db = (await connectDB).db('posts')
    let board = await db.collection('board').findOne({boardName:req.query.board})
    
    if (!board) {
        return res.status(404).json('보드를 찾을 수 없습니다.');
    }

    console.log(board._id)

    const result = await db.collection('post').find({_id: new ObjectId(board._id)}).toArray();

    res.status(200).json(result)
}