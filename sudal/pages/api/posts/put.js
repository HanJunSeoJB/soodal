import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
    if(req.method != 'PUT') { return res.status(400).json('잘못된 접근입니다.') }
    let data = JSON.parse(req.body)
    console.log(data);

    let session = await getServerSession(req, res, authOptions)
    if(!session) { res.status(400).json('로그인이 필요합니다.') }
    if(session.user.id != data.author) { res.status(403).json('작성자만 삭제할 수 있습니다.') }

    // 제목 및 내용 빈칸확인
    if(data.title == '') { 
        console.log('제목없음');
        return res.status(400).json('제목을 입력해주세요.')
    }
    else if(data.content == '') {
        console.log('내용없음');
        return res.status(400).json('내용을 입력해주세요.')
    }
    data.updatedAt = new Date()

    const db = (await connectDB).db('posts')
    await db.collection('post').updateOne({ _id : new ObjectId(data._id) }, { $set : { title : data.title, content : data.content, updatedAt : data.updatedAt } })

    return res.status(200).json('게시글이 수정되었습니다.')
}