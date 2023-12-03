import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }

    const db = (await connectDB).db('materials')

    let query = {}

    // 검색기능 추가 후 수정
    // if(req.query.title) query.title = req.query.title

    if(req.query.author) query.author = req.query.author
    if(req.query.publisher) query.publisher = req.query.publisher
    if(req.query.subject) query.subject = req.query.subject

    let result = await db.collection('high').find(query).toArray();

    return res.status(200).json(result)
}


// title
// url
// author
// publisher
// subject
// sources