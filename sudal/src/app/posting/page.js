'use client'
import { useState } from "react"
import 사진아이콘 from '../../../public/images/pictureIcon.png'
import SNS아이콘 from '../../../public/images/cloud.png'
import 비디오아이콘 from '../../../public/images/video.png'
import 왼쪽정렬 from '../../../public/images/left.png'
import 가운데정렬 from '../../../public/images/center.png'
import 오른쪽정렬 from '../../../public/images/right.png'
import 양쪽정렬 from '../../../public/images/all.png'
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Textarea} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import DetailLayout from "../detail/[id]/DetailLayout"
import { LuFunctionSquare } from "react-icons/lu"


export default function Posting(board){
    const boardNames = {
        free: '자유게시판',
        qna: 'Q&A',
        info: '정보게시판'
    };
    let boardName = boardNames[board.searchParams.board];

    {/*폰트 크기 조절 함수 */}
    const fontSizeMap = {
        '16': 'text-base',
        '18': 'text-lg',
        '20': 'text-xl',
        '24': 'text-2xl',
    }
    const router = useRouter()

    let [title, setTitle] = useState('')
    function handleChange(event) {
        setTitle(event.target.value); // 입력값으로 title 상태를 업데이트
    }
    let [content, setContent] = useState('')
    let [currentFont, setCurrentFont] = useState('맑은고딕')
    let [currentFontSize, setCurrentFontSize] = useState('16')
    let [currentTextAlign, setCurrentTextAlign] = useState('left')

    // let [filename, setFilename] = useState()
    // let [file, setFile] = useState()
    // let [objectURL, setObjectURL] = useState()
    // let [result, setResult] = useState()

    function handleSubmit(title, content) {
        fetch('api/posts/post', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                content: content,
                boardName: board.searchParams.board,
                font: currentFont,
                fontSize: currentFontSize,
                textAlign: currentTextAlign,
            })
        }).then(async (r)=> {
                if(!r.ok) {
                    const message = await r.text();
                    alert(message);
                }
                const response = await r.json();
                const postId = response.postId;
                router.push(`/detail/${postId}?`)
            })
    }

    return(
        <div className="flex flex-row">
            <DetailLayout board = {boardName}/>
            <div className="w-full h-screen ml-9">
            {/*가운데 부분 */}
            <div className="flex flex-col w-5/6 h-full">
                {/*상단 카테고리 */}
                <div className="flex flex-row justify-between mt-7">
                    <h1 className="font-['GsansBold'] text-2xl">{boardName}</h1>
                    <p className="font-['Gsanslight text-xs']">Home {">"} {boardName}</p>
                </div>
                <p className="mt-2 font-['Gsans'] text-base">우리의 생각을 자유롭게 이야기하는 게시판입니다.</p>
                {/*막대 바 */}
                <div className="border border-gray mt-5"/>
                    {/*제목 바 */}
                    <input
                    name="title"
                    className="mt-5 bg-[#E9E9E9] border-0.5 border-grey h-20 pl-3"
                    placeholder="제목을 입력해주세요"
                    value={title}
                    onChange={handleChange}></input>
                    
                    <div className="flex flex-col h-full w-full border-2 border-grey mt-5">
                        {/* 수정 필요함
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
                        </div> */}
                        {/*설정 컨테이너 */}
                        <div className="h-1/6 border-b bg-[#FBFBFB] border-grey flex flex-row items-center">
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
                        <textarea
                            name="content"
                            className={`w-full h-full py-5 px-5 font-['${currentFont}'] text-${currentTextAlign} ${fontSizeMap[currentFontSize]} border-none outline-none resize-none`} 
                            style={{textAlign: currentTextAlign}}
                            placeholder="내용을 입력해주세요"
                            onChange={(e) => setContent(e.target.value)}
                            
                        ></textarea>
                    </div>
                    {/*등록 버튼 */}
                    <div className="flex justify-end">
                        <button
                            className="w-fit h-fit border-2 border-gray rounded-full px-9 mt-7"
                            onClick={() => {handleSubmit(title, content)}}
                            >
                            등록
                        </button>
                    </div>
            </div>
        </div>
        </div>
    )
}