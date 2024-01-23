'use client'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { LuMoreVertical } from "react-icons/lu";
import {useRouter} from 'next/navigation'

export default function ListButton({_id, board}) {
    const router = useRouter()
    function handleAction(key) {
        if(key =='delete')
            fetch('/api/posts/delete?column=post', {method : 'DELETE', body : _id})
            .then((r)=>{
                if(r.ok){
                    router.push(`/board?board=${board}&page=1&pageSize=10`)
                }
            })
    }
    return (
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
                <DropdownItem key="delete" className="font-['맑은 고딕'] border-b border-black">삭제하기</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}