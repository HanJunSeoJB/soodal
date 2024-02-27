import { connectDB } from "../../../util/database"
import { authOptions } from "../auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }
    
    const db = (await connectDB).db('posts')
    let data = JSON.parse(req.body)
    let session = await getServerSession(req, res, authOptions)
    if(!session) { return res.status(400).json('로그인이 필요합니다.') }
    data.author = session.user.email

    if(data.content == '') {
        return res.status(400).json( '내용을 입력해주세요.')
    }
    // 유저기능 구현 후 설정
    data.createdAt = new Date()
    
    // 기본값 설정
    data.isBest = false
    
    // 게시글 작성
    await db.collection('comment').insertOne(data)
    return res.status(200).json('댓글이 작성되었습니다.')
    
}