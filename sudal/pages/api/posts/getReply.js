import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    const db = (await connectDB).db('posts')
    let result = await db.collection('reply').find({ postId : req.query.id }).sort({ createdAt: -1 }).toArray()
    return res.status(200).json(result)
  }