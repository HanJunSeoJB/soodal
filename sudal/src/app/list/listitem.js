'use client'

// import { ObjectId } from "mongodb";
import Link from "next/link"

export default function ListItem(props){
    let result = props.result
    return(
        <div>
            {
                result.map((item, index)=>{
                    return(
                        <div className="list-item" key = {index}>
                            <h4><Link href={'/detail/'+item._id}>{item.title}</Link></h4>

                            {/* 수정 */}
                            <Link href={'/edit/' + item._id}>✏️</Link>

                            {/* 삭제 */}
                            <span style={{cursor: "pointer"}} onClick={(e)=>{
                                // Ajax
                                fetch('api/posts/delete', {
                                    method : 'DELETE',
                                    body : item._id
                                }).then((r)=>{
                                    if(!r.ok){
                                        return r.json().then((err)=>{
                                            throw new Error(err.message)
                                        })
                                    }
                                    return r.json()
                                }).catch((err)=>{
                                    alert(err.message)
                                })
                            }}>🗑️</span>
                            
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}