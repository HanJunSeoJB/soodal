// import { getServerSession } from "next-auth"
import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }
    
    // 유저기능 구현 후 추가
    // let session = await getServerSession(req, res, authOptions)
    // if(!session) { res.status(500).json({message: '로그인이 필요합니다.'}) }

    const db = (await connectDB).db('posts')

    let data = JSON.parse(req.body)

    // 이미지 부분 제외
    let url = data.url
    delete data.url
    
    // 제목 및 내용 빈칸확인
    if(data.title == '') { 
        // console.log('제목없음');
        return res.status(400).json('제목을 입력해주세요.')
    }
    else if(data.content == '') {
        // console.log('내용없음');
        return res.status(400).json( '내용을 입력해주세요.')
    }
    // 유저기능 구현 후 설정
    data.author = 'SampleAuthor'

    // 게시판 설정
    // 각 게시판에 맞는 id값을 가져옴
    let board = await db.collection('board').findOne({boardName: data.boardName})
    delete data.boardName
    data.boardId = board._id
    
    // 기본값 설정
    data.like = 0
    data.view = 0
    data.isPopular = false
    data.isAnswerd = false
    data.createdAt = new Date()
    data.updatedAt = new Date()
    
    let post = await db.collection('post').insertOne(data)

    if(url){
        try{
            await db.collection('postImg').insertOne({
                postId: post.insertedId,
                image: url,
            })
        } catch(err) {
            await db.collection('post').deleteOne({_id: post.insertedId})
            return res.status(500).json('이미지 업로드에 실패했습니다.')
        }
    }

    return res.status(200).json('게시글이 작성되었습니다.')
    
}