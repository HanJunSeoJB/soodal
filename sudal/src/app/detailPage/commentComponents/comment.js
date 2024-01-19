'use client'
import Image from 'next/image'
import S_blueGood from '/public/images/s_blueGood.png'
import GoodToggle from "./goodToggle"
import KebabButton from "./kebabButton"
import CommentStarRating from "./../components/starRating"

export default function Comment() {
  return (
    <div className='flex flex-col mt-[35px] ml-[22px] mr-[22px] mb-[35px]'>
      <div className='flex flex-row justify-between'>
        {/*댓글내용*/}
        <div>
          {/*제목 및 좋아요*/}
          <div className='flex flex-row items-center'>
            <p className="flex text-[19px] text-[#303030] font-[GsansBold] mt-[3px]">정말 강추해요</p>
            <Image src={S_blueGood} className='flex w-[20px] h-[18px] ml-[7px]'/>
            <p className="ml-[3px] text-[13px] text-[#005CA6] font-[PretendardLight]">3</p>
          </div>
          {/*작성자 및 작성날짜*/}
          <div className="flex flex-row mb-[14px] text-[15px] text-[#8B8B8B] font-['PretendardMedium']">
            <p>삐약이 선생님</p>&nbsp;&nbsp;
            <p>|</p>&nbsp;&nbsp;
            <p>날짜</p> 
          </div>
          <CommentStarRating rating={4} starId={2}/>
          {/*댓글내용*/}
          <div className="flex mt-[33px] mb-[14px] text-[17px] text-[#303030] font-['PretendardMedium']">
            <p>
              진짜 좋은 자료들만 모아놓았습니다 강추합니다!
            </p>
          </div>
          {/*태그*/}
          <div className='flex flex-row mb-[35px]'>
            <div className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] text-[#444444] font-['Gsans'] shadow-md">
                가격이 저렴해요
            </div>
            <div className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] text-[#444444] font-['Gsans'] shadow-md">
                가격이 적절해요
            </div>
          </div>
        </div>

        {/*버튼들*/}
        <div className='flex items-start'>
          <div className='flex flex-row justify-center'>
            <GoodToggle/>
            <div className='w-[10px]'></div>
            <KebabButton/>
          </div>
        </div>
      </div>
      
      <div className='flex mt-[11px] border-t-[0.5px] border-[#D5D5D5]'></div>
    </div>
  )
}