import { ObjectId } from "mongodb"
import { connectDB } from "../../../../util/database"

export default async function Detail(props) {
    const db = (await connectDB).db('posts')
    const result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    return (
        <div>
            <h1>{result.title}</h1>
            <p>{result.content}</p>
        </div>
    )
}