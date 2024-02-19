'use client'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { LuMoreVertical } from "react-icons/lu";
import {useRouter} from 'next/navigation'
import { useState } from "react";
import { SessionProvider } from "next-auth/react"

export default function ListButton({_id, board}) {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false); // 모달 표시 상태
    const [modalMessage, setModalMessage] = useState(''); // 모달에 표시할 메시지
    function handleAction(key) {
        if(key =='delete')
            fetch('/api/posts/put?column=post', {method : 'DELETE', body : _id})
            .then(async (r)=>{
                if(r.ok){
                    router.push(`/posting?board=${board}&`)
                }
                else if (r.status === 400 || r.status === 403) {
                    const message = await r.text();
                    setModalMessage(message);
                    setShowModal(true); // 모달 표시
                }
            })
            else if(key =='modify') {
                fetch('/api/posts/getUser', {method : 'POST', body : _id}).then(async (r)=>{
                    if(r.ok){
                        router.push(`/edit/${_id}?board=${board}`)
                    }
                    else if (r.status === 400 || r.status === 403) {
                        const message = await r.text();
                        setModalMessage(message);
                        setShowModal(true); // 모달 표시
                    }
            })
        }
    }
    return (
        <SessionProvider>
            <div>
            <Dropdown>
                <DropdownTrigger>
                <button>
                    <LuMoreVertical className="flex justify-end w-7 h-7"/>
                </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className="border border-black cursor-pointer bg-white"
                onAction={(key) => handleAction(key)}
                >
                    <DropdownItem key="report" className="font-['맑은 고딕'] border-b border-black">신고하기</DropdownItem>
                    <DropdownItem key="modify" className="font-['맑은 고딕'] border-b border-black">수정하기</DropdownItem>
                    <DropdownItem key="delete" className="font-['맑은 고딕'] border-b border-black">삭제하기</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {/* 모달 표시 */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <p>{modalMessage}</p>
                        <button onClick={() => setShowModal(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
        </SessionProvider>
    )
}