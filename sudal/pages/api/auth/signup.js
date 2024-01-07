import { connectDB } from "util/database";
const { ObjectId } = require('mongodb'); // ObjectId를 추가로 불러옵니다.

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    const db = (await connectDB).db('users');
    const { username, password, email, name, birthdate } = 요청.body; // 요청에서 필드 추출

    const document = {
      _id: new ObjectId(), // ObjectId를 생성하여 사용합니다.
      username: username,
      password: password, // 비밀번호는 해싱해야 합니다.
      email: email,
      name: name,
      birthdate: birthdate,
    };

    await db.collection('user').insertOne(document);
    응답.status(200).json('성공');
  }
};
