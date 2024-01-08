'use client'
import StarRating from "./starRating";

export default function DetailPage() {
  return (
      //children페이지 전체 크기 설정
      <div className='flex flex-col w-[1000px]'>
        {/*네비게이션 바*/}
        <div className='flex flex-row justify-between ml-[36px] mt-[41px]'>
          <div className='flex flex-row'>
            <p className="text-[23px] text-[#303030] font-['Gsans']"> &lt; </p>
            <p className="text-[23px] text-[#303030] font-['GsansBold'] ml-[18px]">
            [2015 개정] 내신1등급 도전 단계별 변형문제 </p>
          </div>
          <div className='flex'>
            <p className="mt-[3px] text-[13px] text-[#303030] font-['Gsanslight']">Home &gt; 고등내신 &gt; 과목선택 &gt; 자료검색</p>
          </div>
        </div>

        {/*자료 세부사항 및 방문버튼*/}
        <div className='flex flex-row justify-between ml-[70px] mt-[39px]'>
          {/*별점*/}
          <div className='flex flex-col'>
            <p className="text-[20px] text-[#444444] font-['PretendardMedium']">지이다 영어교실</p>
            <div className='flex flex-row'>
              {/*별*/}
              <div>
                <StarRating/>
              </div>
              {/*평점*/}
              <div>

              </div>
            </div>
          </div>

          {/*버튼들*/}
          <div>

          </div>
        </div>
      </div>
  )
}
