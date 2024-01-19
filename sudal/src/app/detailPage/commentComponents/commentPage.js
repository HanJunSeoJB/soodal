import Image from 'next/image'
import Comment from "./comment"
import Sorting from "./sorting"

export default function CommentPage() {
  return (
    <div className='flex flex-col mt-[70px] ml-[69px]'>
      <div className="flex flex-row justify-between items-center rounded-full bg-[#EBEBEB] px-[23px] py-[3px]">
        <p className="flex text-[20px] text-[#303030] font-['GsansBold'] mt-[4px]">리뷰</p>
        {/*정렬 버튼*/}
        <Sorting/>
      </div>
      <div>
        {/*comment반복해서 생성*/}
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </div>
  )
}