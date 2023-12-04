import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }

    const db = (await connectDB).db('materials')
    let id = req.body.id

    let result = await db.collection('high').findOne({_id:new ObjectId(id)});

    if(!result) return res.status(404).json('게시글을 찾을 수 없습니다.')

    return res.status(200).json(result)
}