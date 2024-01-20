'use client'
import { useRouter } from 'next/navigation'

export default function BackButton(boardName){
    const router = useRouter()
    const goBack = () => {
        router.push(`/board?board=${boardName}page=1&pageSize=10`);
    };
    return (
        <button
            className="w-fit h-fit border-2 border-gray rounded-full px-9 mt-7"
            onClick={goBack}>
            목록
        </button>
    )
}