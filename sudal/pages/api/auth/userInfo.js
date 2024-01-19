// /pages/api/auth/userInfo.js
import { connectDB } from 'util/database';
const { ObjectId } = require('mongodb'); // ObjectId를 추가로 불러옵니다.


export default async function handler(req, res) {
  if (req.method === 'POST') {
        const db = (await connectDB).db('users');
        const { accessToken, username, userId } = req.body;

        const document = {
            _id: new ObjectId(), // ObjectId를 생성하여 사용합니다.
            userId: userId,
            username: username,
            accessToken: accessToken,
        };
        

        await db.collection('user').insertOne(document);
        res.status(200).json('성공');
    }
}
