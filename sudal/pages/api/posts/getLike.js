import { connectDB } from "../../../util/database"

export default async function handler(req, res) {
    const db = (await connectDB).db('posts')
    let count = await db.collection('like').countDocuments({ 
      parent: req.query.id,
      type: req.query.type
    });
    return res.status(200).json({ count: count });
  }