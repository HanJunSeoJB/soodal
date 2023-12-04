import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }

    const db = (await connectDB).db('posts')
    let board = await db.collection('board').findOne({boardName:req.query.board})

    if (!board) {
        return res.status(404).json('게시판을 찾을 수 없습니다.');
    }

    let result = await db.collection('post').find({boardId:board._id}).toArray();

    return res.status(200).json(result)
}