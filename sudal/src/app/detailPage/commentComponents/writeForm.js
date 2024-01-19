'use client'
import StarClick from './starClick'

export default function WriteForm() {
  return (
    <div className="flex flex-col w-auto mt-[70px]">
      <div className='border border-[#D5D5D5] rounded-[14px] w-full p-[22px] ml-[22px]'>
        <StarClick/>
        <input 
        type='text' name = 'commentTitle' id='commentTitle' 
        className="w-full mt-[18px] 
        border-[0.5px] border-[#D5D5D5] focus:border-[#005CA6] focus:border-[1px] focus:outline-none rounded-full py-[12px] px-[21px] 
        text-16 text-[#303030] font-['PretendardLight'] placeholder:text-[#989898]" 
        placeholder='제목을 입력해 주세요'/>
        <textarea 
        type='text' name = 'commentContent' id='commentContent'
        className="w-full h-[140px] mt-[17px] resize-none
        border-[0.5px] border-[#D5D5D5] focus:border-[#005CA6] focus:border-[1px] focus:outline-none rounded-[21px] py-[12px] px-[21px]
        text-16 text-[#303030] font-['PretendardLight'] placeholder:text-[#989898]"
        placeholder='리뷰를 남겨주세요'/>
        <div className='flex mt-[12px] justify-end'>
          <button type='submit' className="rounded-full border border-[#D5D5D5] w-auto px-[20px] py-[5px] text-[15px] text-[#444444] font-[PretendardMedium]">
            다음
          </button>
        </div>
      </div>
    </div>
  )
}