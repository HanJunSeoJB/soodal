import Image from 'next/image'

export default function ReviewTag() {

  return (
    <div className='flex flex-col'>
      <p className="flex text-[20px] text-[#303030] font-['GsansBold']">리뷰태그</p>
      <div className='flex mt-[11px] mb-[16px] border-t-[0.5px] border-[#D5D5D5]'></div>
      
      {/*리뷰태그*/}
      <div className='flex flex-row'>
        <div className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] text-[#444444] font-['Gsans'] shadow-md">
            가격이 저렴해요
        </div>
        <div className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] text-[#444444] font-['Gsans'] shadow-md">
            가격이 적절해요
        </div>
        <div className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] text-[#444444] font-['Gsans'] shadow-md">
            가격이 저렴해요
        </div>
      </div>

    </div>
  )
}