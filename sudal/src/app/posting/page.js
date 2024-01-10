'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import 사진아이콘 from '../../../public/images/pictureIcon.png'
import SNS아이콘 from '../../../public/images/cloud.png'
import 비디오아이콘 from '../../../public/images/video.png'
import 왼쪽정렬 from '../../../public/images/left.png'
import 가운데정렬 from '../../../public/images/center.png'
import 오른쪽정렬 from '../../../public/images/right.png'
import 양쪽정렬 from '../../../public/images/all.png'
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";

export default function Posting(board){
    const router = useRouter()

    {/*폰트 크기 조절 함수 */}
    const fontSizeMap = {
        '16': 'text-base',
        '18': 'text-lg',
        '20': 'text-xl',
        '24': 'text-2xl',
    }

    let [title, setTitle] = useState('안녕하세요')
    let [content, setContent] = useState('11')
    let [boardName, setBoardName] = useState('free')
    let [currentFont, setCurrentFont] = useState('맑은고딕')
    let [currentFontSize, setCurrentFontSize] = useState('16')
    let [currentTextAlign, setCurrentTextAlign] = useState('left')

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
        <div className="w-full h-full ml-9">
            {/*가운데 부분 */}
            <div className="flex flex-col w-5/6 h-screen">
                {/*상단 카테고리 */}
                <div className="flex flex-row justify-between mt-10">
                    <h1 className="font-['GsansBold'] text-2xl">자유게시판</h1>
                    <p className="font-['Gsanslight text-xs']">Home {">"} {board.content}자유게시판</p>
                </div>
                <p className="mt-1 font-['Gsans'] text-base">우리의 생각을 자유롭게 이야기하는 게시판입니다.</p>
                {/*막대 바 */}
                <div className="border border-gray mt-5"/>
                {/*제목 바 */}
                <input className="mt-5 bg-[#E9E9E9] border border-grey h-11 pl-6" placeholder="제목을 입력해주세요"></input>
                {/* 내용 컨테이너 */}
                <div className="flex flex-col h-4/5 w-full border-2 border-grey mt-4">
                    {/* 버튼 컨테이너 */}
                    <div className="ml-5 mt-3 w-full flex flex-row">
                        <button className="flex flex-col justify-center items-center">
                            <Image src={사진아이콘} className='w-auto h-auto' />
                            사진
                        </button>
                        <button className="ml-6 flex flex-col justify-center items-center">
                            <Image src={SNS아이콘} className='w-auto h-auto' />
                            SNS 사진
                        </button>
                        <button className="ml-6 flex flex-col justify-center items-center">
                            <Image src={비디오아이콘} className='w-auto h-auto' />
                            동영상
                        </button>
                    </div>
                    {/*설정 컨테이너 */}
                    <div className="mt-3.5 h-1/6 border-y border-grey flex flex-row items-center">
                        {/*글꼴 설정 */}
                        <Dropdown>
                            <DropdownTrigger>
                                <button className={`w-fit h-fit flex flex-row items-center font-['${currentFont}'] border border-black ml-5`}>
                                    {currentFont}
                                    <FaChevronDown className="ml-3.5"/>
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions" className="border border-black cursor-pointer bg-white"
                            onAction={(key) => setCurrentFont(key)}
                            >
                                <DropdownItem key="맑은고딕" className="font-['맑은 고딕'] border-b border-black">맑은고딕</DropdownItem>
                                <DropdownItem key="HY견고딕" className="font-['HY견고딕'] border-b border-black">HY견고딕</DropdownItem>
                                <DropdownItem key="HY견명조" className="font-['HY견명조'] border-b border-black">HY견명조</DropdownItem>
                                <DropdownItem key="Gsans" className="font-['Gsans'] ">
                                G마켓산스
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/*폰트 크기 */}
                        <Dropdown>
                            <DropdownTrigger>
                                <button className={`w-fit h-fit flex flex-row items-center font-['맑은고딕'] border border-black ml-6`}>
                                    {currentFontSize}
                                    <FaChevronDown className="ml-3.5"/>
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions" className="border border-black cursor-pointer bg-white"
                            onAction={(key) => setCurrentFontSize(key)}
                            >
                                <DropdownItem key="16" className="text-base border-b border-black">16</DropdownItem>
                                <DropdownItem key="18" className="text-lg border-b border-black">18</DropdownItem>
                                <DropdownItem key="20" className="text-xl border-b border-black">20</DropdownItem>
                                <DropdownItem key="24" className="text-2xl">
                                24
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <button className="ml-6">
                            <Image src={왼쪽정렬} className='w-auto h-auto' onClick={() => setCurrentTextAlign('left')} />
                        </button>
                        <button className="ml-6">
                            <Image src={가운데정렬} className='w-auto h-auto' onClick={() => setCurrentTextAlign('center')}/>
                        </button>
                        <button className="ml-6">
                            <Image src={오른쪽정렬} className='w-auto h-auto' onClick={() => setCurrentTextAlign('right')}/>
                        </button>
                        <button className="ml-6">
                            <Image src={양쪽정렬} className='w-auto h-auto' onClick={() => setCurrentTextAlign('justify')}/>
                        </button>
                    </div>
                    {/*내용 입력창 */}
                    <form className="h-full">
                        <textarea 
                            className={`w-full min-h-full font-['${currentFont}'] text-${currentTextAlign} ${fontSizeMap[currentFontSize]} border-none outline-none resize-none}`} 
                            style={{textAlign: currentTextAlign}}
                            placeholder="내용을 입력해주세요"
                        ></textarea>
                    </form>
                </div>
                {/*등록 버튼 */}
                <div className="flex justify-end">
                <button
                        className="w-fit h-fit border-2 border-gray rounded-full px-9 mt-7"
                        onClick={async()=>{
                    // 이미지 업로드 성공 시 이미지 url도 함께 전송
                    if(!result || uploadImg.ok){
                        await fetch('/api/posts/post',{
                            method: 'POST',
                            body: JSON.stringify({
                                title: title,
                                content: content,
                                boardName: boardName,
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
                    등록
                </button>
                </div>
            </div>
            
           
           
            
        </div>
    )
}