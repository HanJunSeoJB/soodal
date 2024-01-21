'use client'
import Image from 'next/image'
import user from '../../../public/images/user.png'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";
import {signOut} from 'next-auth/react'

export default function UserLayout({image, name}) {

    return (
        <div className="text-base font-['Pretendard'] w-auto h-full flex flex-row items-center justify-center">
            <p className="mr-5">고객센터</p>
            <Image src={image || user} width={25} height={25} className='rounded-full w-auto h-auto mr-2.5'></Image>
            <p>{name || "사용자"}님</p>
            <Dropdown>
                <DropdownTrigger>
                <button>
                    <FaChevronDown className="ml-3.5"/>
                </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className="border border-black cursor-pointer bg-white"
                onAction={()=> {signOut({ callbackUrl: '/login' })}}
                >
                    <DropdownItem key="신고하기" className="font-['맑은 고딕'] border-b border-black">로그아웃</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}