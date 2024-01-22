import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if(req.method !== 'GET') { 
        return res.status(400).json({message: '잘못된 접근입니다.'});
    }
    
    const db = (await connectDB).db('posts');
    const postId = req.query.id;
    let query;

    // postId가 유효한 ObjectId 형식인 경우
    if (ObjectId.isValid(postId)) {
        // ObjectId로 변환하여 사용
        query = { _id: new ObjectId(postId) };
    } else {
        // 문자열로 처리
        query = { _id: postId };
    }

    // 해당 게시글이 존재하는지 확인합니다.
    const postExists = await db.collection('post').findOne(query);

    if (postExists) {
        // 게시글이 존재하면 view 값을 업데이트합니다.
        await db.collection('post').updateOne(
            { _id: new ObjectId(postId) },
            { $inc: { view: 1 } }
        );
        return res.status(200).json({ message: '조회수 증가' });
    } else {
        // 게시글이 존재하지 않으면 실패 메시지를 반환합니다.
        return res.status(404).json({ message: '게시물이 존재하지 않습니다.' });
    }
}
