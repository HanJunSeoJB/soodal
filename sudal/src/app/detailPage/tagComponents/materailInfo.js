export default function MaterialInfo() {
  const subject = '영어'

  return (
    <div className='flex flex-col mb-[37px]'>
      <p className="flex text-[20px] text-[#303030] font-['GsansBold']">자료정보</p>
      <div className='flex mt-[11px] border-t-[0.5px] border-[#D5D5D5]'></div>
      <div className='flex flex-row'>
        <p className='text-[18px] text-[#444444] font-[PretendardMedium] mt-[16px] mr-[90px]'>
          과목 | {subject}
        </p>
        <p className='text-[18px] text-[#444444] font-[PretendardMedium] mt-[16px] mr-[90px]'>
          저자 | {subject}
        </p>
        <p className='text-[18px] text-[#444444] font-[PretendardMedium] mt-[16px] mr-[90px]'>
          출판사 | {subject}
        </p>
      </div>
    </div>

  )
}