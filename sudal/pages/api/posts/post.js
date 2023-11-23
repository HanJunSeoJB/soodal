// import { getServerSession } from "next-auth"
import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    if(req.method != 'POST') { res.status(500).json({message: '잘못된 접근입니다.'}) }
    
    // 유저기능 구현 후 추가
    // let session = await getServerSession(req, res, authOptions)
    // if(!session) { res.status(500).json({message: '로그인이 필요합니다.'}) }

    const db = (await connectDB).db('posts')

    let data = JSON.parse(req.body)

    if(data.title == '') { res.status(500).json({message: '제목을 입력해주세요.'}) }
    else if(data.content == '') { res.status(500).json({message: '내용을 입력해주세요.'}) }

    // 유저기능 및 게시판 구현 후 추가
    data.boardId = 'SampleBoard'
    data.author = 'SampleAuthor'

    // 기본값 설정
    data.like = 0
    data.view = 0
    data.isPopular = false
    data.isAnswerd = false
    data.createdAt = new Date()
    data.updatedAt = new Date()
    
    return res.status(200).json({message: '글이 작성되었습니다.'})
}

// export default async function handler(req, res){
//     let session = await getServerSession(req, res, authOptions)
//     if(session){
//         req.body.author = session.user.email
//     }else{
//         return res.status(500).json('로그인이 필요합니다.')
//     }
//     const client = await connectDB
//     const db = client.db('forum')

//     if(req.method === 'POST'){
//         if(req.title == ''){
//             return res.status(500).json('제목없음')
//         }
//         else if(req.content == ''){
//             return res.status(500).json('내용없음')
//         }
//         await db.collection('post').insertOne(req.body)
//         return res.status(200).json(req.body)
//     }
// }