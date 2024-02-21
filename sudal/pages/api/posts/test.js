import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }

    let session = await getServerSession(req, res, authOptions)
    if(!session) { return res.status(302).redirect('/login') }

    const db = (await connectDB).db('posts')

    let data = JSON.parse(req.body)
    console.log(data)

    // 제목 및 내용 빈칸확인
    if(data.title == '') { 
        return res.status(400).json('제목을 입력해주세요.')
     }
    else if(data.content == '') {
       return res.status(400).json( '내용을 입력해주세요.')
    }

    // 게시판 설정
    // 각 게시판에 맞는 id값을 가져옴
    // 프론트단에서 free / qna / information 중 하나를 선택하면 해당 게시판의 id값을 가져옴
    let board = await db.collection('board').findOne({boardName: data.boardName})
    delete data.boardName
    data.boardId = board._id
    
    // 기본값 설정
    data.author = session.user.email
    data.view = 0
    data.createdAt = new Date()
    data.updatedAt = new Date()
    data.isAnswerd = false
    
    // 게시글 작성
    let post = await db.collection('post').insertOne(data)
    return res.status(200).json({postId: post.insertedId})
    
}