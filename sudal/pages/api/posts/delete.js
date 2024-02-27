import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {

    if(req.method != 'DELETE') { return res.status(400).json('잘못된 접근입니다.') }
    let column = req.query.column

     let session = await getServerSession(req, res, authOptions)
     if(!session) { res.status(400).json('로그인이 필요합니다.') }
     if(session.user.id != data.author) { res.status(403).json('작성자만 삭제할 수 있습니다.') }

    const db = (await connectDB).db('posts')
    let data = await db.collection(column).findOne({_id: new ObjectId(req.body)})
    if(!data) { return res.status(404).json('게시글이 존재하지 않습니다.') }
    console.log(data);
    await db.collection(column).deleteOne(data)

    return res.status(200).json('게시글이 삭제되었습니다.')

}