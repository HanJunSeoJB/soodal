import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }
    
    const db = (await connectDB).db('posts')
    let data = JSON.parse(req.body)

    if(data.content == '') {
        return res.status(400).json( '내용을 입력해주세요.')
    }
    // 유저기능 구현 후 설정
    data.author = 'SampleAuthor'
    data.createdAt = new Date()
    
    data.isBest = false
    
    // 게시글 작성
    await db.collection('reply').insertOne(data)
    return res.status(200).json('답글이 작성되었습니다.')
    
}