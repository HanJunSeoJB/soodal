import { connectDB } from "../../../util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json({message: '잘못된 접근입니다.'}) }

    let session = await getServerSession(req, res, authOptions)
     if(!session) { res.status(400).json('로그인이 필요합니다.') }
    
    const db = (await connectDB).db('posts')
    let data = JSON.parse(req.body)
    let user = data.author
    let parent = data.parent
    let type = data.type
    let likes = await db.collection('like').find({
        parent: parent, 
        author: user,
        type: type
    }).toArray();
    
    if (likes.length > 0) {
        let data = await db.collection('like').findOne({author: user})
        await db.collection('like').deleteOne(data)
        return res.status(200).json('좋아요 취소 완료')
    }
    
    await db.collection('like').insertOne(data)
    return res.status(200).json('좋아요 등록 완료')
    
}