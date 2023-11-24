import { connectDB } from "../../../util/database"
import ListItem from "./listitem"

export const dynamic = 'force-dynamic'

export default async function List(){
    const client = await connectDB
    const db = client.db('posts')
    let result = await db.collection('post').find().toArray()
    
    return(
        <div>
            <ListItem result={result}/>
        </div>
    )
}