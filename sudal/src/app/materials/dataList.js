'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DataList() {
  const router = useRouter();

  const handleVisit = () => {
    // Redirects to the specified URL
    router.push('https://solvook.com/');
  };
  return (
      <div className="relative flex row border-[#D5D5D5] border-b border-dashed pb-[41.5px] mt-[20.5px] font-['Gsans']">
        {/* 임시 이미지 */}
        {/* 데이터베이스에서 가져온 이미지로 변경 요망 */}
        <div className="flex flex-row">
          <div className="w-[108px] h-[127px] bg-gray-300 mr-[13px]"/>

          <div className="flex flex-col">

            {/* 데이터베이스에서 가져온 교재 이름 */}
            <p className="text-[15px] text-[#444444]">지이다 영어교실</p>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-col '>
                <div className="flex items-center">
                {/* 데이터베이스에서 가져온 제목 */}
                <a href='/detailPage' className="text-[18px] text-[#444444] font-bold mr-[11.9px]">[2015개정] 내신 1등급 도전 단계별 변형문제</a>
                <Image src="/ratingStar.png" width={16.36} height={15.56}/>
                {/* 데이터베이스에서 가져온 평점 */}
                <p className="ml-[2.7px] text-[13px] text-gray-400">4.0 (20)</p>
                </div>

                <div className="text-[13px] text-[#444444] flex ml-[1px]">
                  <p style={{borderColor: '#1D8EF1', color: '#1D8EF1'}} className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center">무료</p>
                  <p style={{borderColor: '#1D8EF1', color: '#1D8EF1'}} className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center ml-[5px]">자료</p>
                  <p className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center ml-[5px]">고1</p>
                  <p className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center ml-[5px]">영어</p>
                  <p className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center ml-[5px]">능출김</p>
                  <p className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center ml-[5px]">5과</p>
                  <p className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center ml-[5px]">변형문제</p>
                  <p className="border rounded-full px-[7px] pt-[5px] pb-[1px] inline-flex text-center ml-[5px]">단계별학습</p>
                </div>
              </div>
              <button
              onClick={handleVisit}
              className=
              "ml-[1px] rounded-full bg-blue h-fit w-fit px-3.5 py-1 text-white font-['PretendardMedium'] mt-[4px]">방문하기</button>
            </div>

            <hr className="my-[8px] w-[880px]"/>

            <div className="flex-col">
              <div className="w-fit items-center border rounded-full text-[14px] text-[#444444] mr-[10px] pt-[5px] pb-[1px] px-[12px] inline-flex shadow-tag">
                <p className="text-center">개념 및 이론이 정확해요</p>
                <div className="border-r h-full ml-[4px] mr-[7.5px] inline-flex"></div>
                  <p style={{ color: '#DC3232'}} className="text-center">10</p>
                </div>
                <div className="w-fit items-center border rounded-full text-[14px] text-[#444444] mr-[10px] pt-[5px] pb-[1px] px-[12px] inline-flex shadow-tag">
                  <p className="text-center">가격이 저렴해요</p>
                  <div className="border-r h-full ml-[4px] mr-[7.5px] inline-flex"></div>
                  <p style={{ color: '#DC3232'}} className="text-center">5</p>
                </div>
                <div className="w-fit items-center border rounded-full text-[14px] text-[#444444] mr-[10px] pt-[5px] pb-[1px] px-[12px] inline-flex shadow-tag">
                  <p className="text-center">믿을만한 자료에요</p>
                  <div className="border-r h-full ml-[4px] mr-[7.5px] inline-flex"></div>
                  <p style={{ color: '#DC3232'}} className="text-center">3</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}
