import Image from 'next/image' 
import best from '../../../../public/images/best.png'
import { BiLike } from "react-icons/bi";

export default function CommentList({isLike, comment, author, createdAt, like}) {
    return (
        <div className='flex flex-col mt-8'>
            <div className="w-full h-fit flex flex-row items-center justify-between font-['Pretendard']">
                <div className='flex flex-row items-center'>
                    {isLike && <Image src={best} alt="Best" width={50} height={50}  className='mx-2'/>}
                    <p>{author}</p>
                    <p className='ml-3.5'>{timeSince(createdAt)}</p>
                    <BiLike className="w-fit h-fit ml-3.5" color="#005CA6"/>
                    <p className='ml-1'>{like}</p>
                </div>
                <div className='flex flex-row'>
                    <button>답글달기</button>
                    <button>
                        <BiLike className="w-fit h-fit ml-7" />
                    </button>
                </div>
            </div>
            <p className="mt-3 font-['Pretendard']">{comment}</p>
            {/*긴 막대 바 */}
            <div className="border border-darkgrey my-5"/>
        </div>
    )
}

function timeSince(date) {
    const commentDate = new Date(date)
    const now = new Date();
    const differenceInMinutes = Math.floor((now - commentDate) / 60000); // 밀리초를 분으로 변환

    if (differenceInMinutes < 60) {
        return `${differenceInMinutes}분 전`;
    } else if (differenceInMinutes < 24 * 60) {
        return `${Math.floor(differenceInMinutes / 60)}시간 전`;
    } else {
        return `${Math.floor(differenceInMinutes / (24 * 60))}일 전`;
    }
}
