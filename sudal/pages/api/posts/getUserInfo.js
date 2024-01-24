import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
    try {
        const db = await connectDB(); // 데이터베이스 연결
        const collection = db.db('test').collection('account'); // 'test' 데이터베이스의 'account' 컬렉션 선택

        const result = await collection.find().toArray(); // 모든 문서 조회

        res.status(200).json(result); // 조회된 결과를 JSON 형태로 반환
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 내부 오류가 발생했습니다.' }); // 에러 핸들링
    }
}
