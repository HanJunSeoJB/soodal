'use client'

export default function Sorting() {
  return (
  <div className="flex flex-row justify-between items-center rounded-full bg-[#EBEBEB] px-[23px] py-[3px]">
    <p className="flex text-[20px] text-[#303030] font-['GsansBold'] mt-[4px]">리뷰</p>
    <div className="flex text-[15px] text-[#636363] font-['PretendardMedium']">
      <p>추천순</p>&nbsp;&nbsp;
      <p> | </p>&nbsp;&nbsp;
      <p>별점 낮은 순</p>&nbsp;&nbsp;
      <p> | </p>&nbsp;&nbsp;
      <p>별점 높은 순</p>
    </div>
  </div>
  )
}