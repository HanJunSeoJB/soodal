'use client'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { LuMoreVertical } from "react-icons/lu";

export default function ListButton() {
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
                <DropdownItem key="신고하기" className="font-['맑은 고딕'] border-b border-black">신고하기</DropdownItem>
                <DropdownItem key="삭제하기" className="font-['맑은 고딕'] border-b border-black">삭제하기</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

function handleAction(key) {
    if (key === '신고하기') {
        alert('신고하기')
    }
    else if (key === '삭제하기') {
        alert('삭제하기')
    }
}