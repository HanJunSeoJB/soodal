import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    const db = (await connectDB).db('posts')
    let result = await db.collection('like').find({ parent : req.query.id }).toArray()
    return res.status(200).json(result)
  }