'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Posting(board){
    const router = useRouter()

    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [boardName, setBoardName] = useState('free')

    let [filename, setFilename] = useState()
    let [file, setFile] = useState()
    let [objectURL, setObjectURL] = useState()
    let [result, setResult] = useState()

    useEffect(() => {
        if (file) {
            const objectURL = URL.createObjectURL(file);
            const filename = encodeURIComponent(file.name);
            fetch('api/posts/image?file=' + filename)
            .then(r => r.json())
            .then(data => {
                setResult(data)
                setObjectURL(URL.createObjectURL(file))
                setFilename(encodeURIComponent(filename))
            });
        }
    }, [file]);
    return(
        <div>
            <div className="flex flex-col">
                {/*상단 카테고리 */}
                <div className="flex flex-row justify-between w-5/6">
                    <h1 className="font-['GsansBold'] text-2xl">자유게시판</h1>
                    <p className="font-['Gsanslight text-xs']">Home {">"} {board.title}자유게시판</p>
                </div>
                <p className="mt-1 font-['Gsans'] text-base">우리의 생각을 자유롭게 이야기하는 게시판입니다.</p>
                <div className="border border-gray w-5/6 mt-5"/>
            </div>
            
            {/* 게시판 종류 선택 */}
            <select onChange={(e)=>{setBoardName(e.target.value)}}>
                <option value="free">자유게시판</option>
                <option value="qna">qna게시판</option>
                <option value="information">정보게시판</option>
            </select><br/><br/>

            <input onChange={(e)=>{setTitle(e.target.value)}}/><br/>
            <input onChange={(e)=>{setContent(e.target.value)}}/><br/>
            <input type="file" accept="image/*"
                onChange={async(e)=>{
                    setFile(e.target.files[0])
                }}
            /><br/>
            
            <button onClick={async()=>{
                // 이미지 업로드 시도
                let uploadImg
                if(result){
                    const formData = new FormData()
                    Object.entries({ ...result.fields, file }).forEach(([key, value]) => {
                        formData.append(key, value)
                    })
                    uploadImg = await fetch(result.url, {
                        method: 'POST',
                        body: formData,
                    })
                }

                // 글 업로드 POST요청
                // 이미지 업로드 성공 시 이미지 url도 함께 전송
                if(!result || uploadImg.ok){
                    await fetch('/api/posts/post',{
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            content: content,
                            boardName: boardName,
                            url: result ? (result.url+'/'+filename) : null
                        })
                    }).then((r)=>{
                        if(!r.ok){
                            return r.json().then((err)=>{
                                throw new Error(err)
                            })
                        }
                        return alert('게시글이 등록되었습니다.')
                    }).catch((err)=>{
                        alert(err.message)
                    })
                }
                
            }}>
                작성
            </button><br/>
            <img src={objectURL}/>
        </div>
    )
}