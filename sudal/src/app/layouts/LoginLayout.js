import Link from 'next/link'

export default function LoginLayout() {
    return (
        <div className='w-auto h-full bg-darkblue p-2 flex flex-row items-center justify-center'>
            <Link href='/login' className="text-white text-sm font-['GSanslight']">로그인</Link>
            {/* 막대 바 */}
            <div className="border-0.25 h-3.5 ml-3 border-white "></div>
            <Link href='/signup' className="text-white text-sm font-['GSanslight'] ml-3">회원가입</Link>
            {/* 막대 바 */}
            <div className="border-0.25 h-3.5 ml-3 border-white "></div>
            <Link href='/center' className="text-white text-sm font-['GSanslight'] ml-3">고객센터</Link>
        </div>
    )
}