import { connectDB } from "../../../util/database";

export default async function handler(req, res) {
    if(req.method != 'GET') { return res.status(400).json('잘못된 접근입니다.') }
    const pageSize = parseInt(req.query.pageSize)
    const page = parseInt(req.query.page)
    const skip = pageSize * (page - 1)
    const limit = pageSize

    const projection={
      content : 0,
      updatedAt : 0,
    }

    const sort={
      createdAt : -1,
    }

    const db = (await connectDB).db('posts')
    let board = await db.collection('board').findOne({boardName:req.query.board})

    if (!board) {
        return res.status(404).json('게시판을 찾을 수 없습니다.');
    }

    let result = await db.collection('post').find({boardId:board._id}, {projection}).skip(skip).limit(limit).sort({createdAt : -1}).toArray();
    let total = await db.collection('post').countDocuments({boardId:board._id})

    const posts = await Promise.all(result.map(async (post) => {
      const comment = await db.collection('post').countDocuments({postId: post._id});
      const date = formatDate(post.createdAt)
      delete post.createdAt
      
      if(req.query.board == 'qna'){
        const nado = await db.collection('scrabPost').countDocuments({postId: post._id, type: 'nado'});
        return{
          ...post,
          nado: nado,
          comment: comment,
          date: date,
          _id: post._id.toString()
        }
      }

      else{
        const recommend = await db.collection('scrabPost').countDocuments({postId: post._id, type:'recommend'});
        const scrap = await db.collection('scrabPost').countDocuments({postId: post._id, type:'scrap'});
        return {
            ...post,
            recommend: recommend,
            scrap: scrap,
            comment: comment,
            date: date,
            _id: post._id.toString()
        };
      }
  }));
  
  res.status(200).json({posts, total});
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}