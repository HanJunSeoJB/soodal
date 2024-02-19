import { connectDB } from "../../../util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if(req.method != 'POST') { return res.status(400).json('잘못된 접근입니다.') }

    let session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('posts')
    let result = await db.collection('post').findOne({_id: new ObjectId(req.body), author: session.user.email})
    if(result) {
        return res.status(200).json('작성자 일치')
    }
    return res.status(403).json('작성자만 삭제 가능합니다.')
}