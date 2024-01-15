import { ObjectId } from "mongodb"
import { connectDB } from "../../../../util/database"
import Input from "./input"

export default async function Edit(props){
    const db = (await connectDB).db('posts')
    let post = JSON.stringify(await db.collection('post').findOne({ _id : new ObjectId(props.params.id)}))

    return(
        <div>
            <h1>Edit</h1>
            <Input post={post}/>
        </div>
    )
}