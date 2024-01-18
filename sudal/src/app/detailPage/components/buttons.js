'use client'
import Image from 'next/image'
import StarRating from "./starRating";
import HeartToggle from './heartToggle'

export default function Buttons() {
  //DB에서 가져온 방문자수, 좋아요수가 각각 views와 likes에 들어가면 됩니다.
  const views = 11000;
  const likes = 10;

  const localeViews = views.toLocaleString('ko-KR');
  const localeLikes = likes.toLocaleString('ko-KR');

  return (
    <div className='flex flex-row justify-between ml-[70px] mt-[39px]'>
      {/*별점*/}
      <div className='flex flex-col'>
        <p className="text-[20px] text-[#444444] font-['PretendardMedium']">지이다 영어교실</p>
        <div className='flex flex-row'>
          <StarRating rating={2.5}/>
        </div>
      </div>

      {/*버튼들*/}
      <div className='flex flex-row'>
        {/*방문하기 버튼*/}
        <div className = 'flex flex-col items-center'>
          <button className="rounded-full border border-[#707070] px-[24px] py-[3px] text-[15px] text-[#444444] font-[PretendardMedium]">
            방문하기
          </button>
          <p className="text-[12px] text-[#B7B7B7] font-['PretendardLight']">
            View {localeViews}
          </p>
        </div>
        {/*좋아요 버튼*/}
        <div className='flex flex-col items-center ml-[7px]'>
          <HeartToggle/>
          <p className="text-[12px] text-[#B7B7B7] font-['PretendardLight']">
            Like {localeLikes}
          </p>
        </div>
      </div>
    </div>
  )
}