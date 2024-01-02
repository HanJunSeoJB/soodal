'use client'
import English from "./english";
import EnglishOne from "./englishOne";
import EnglishTwo from "./englishTwo";
import PracticalEng from "./practicalEng";
import ReadWriteEng from "./readWriteEng";
import CultureEng from "./cultureEng";
import AdvEng from "./advEng";
import CareerEng from "./careerEng";
import AdvReadEng from "./advReadEng";

export default function SelectHigh() {
  return (
      // 전체 viewport margin 설정
      <div className='mt-[41px] ml-[36px]'>
          <div className='flex-col w-auto h-[754px]'>
              {/*네비게이션 바*/}
              <div className='flex flex-row w-full h-[31px]'>
                <div className="flex text-[23px] text-[#303030] font-['GsansBold']">
                  <p/>1. 과목선택
                </div>
                <div className="flex text-[13px] text-[#303030] font-['Gsanslight'] mt-0 ml-auto">
                  <p/>Home &gt; 학습자료 &gt; 고등내신 &gt; 자료찾기
                </div>
              </div>
              {/*자료목록*/}
              <div className='grid grid-cols-5 gap-y-[42px] w-[964px] h-auto mt-[24px] rounded-[19px] border border-[#D5D5D5] py-[50px] px-[25px] shadow-md'>
                {/*영어*/}
                <English/>            
                {/*영어I*/}
                <EnglishOne/>                 
                {/*영어II*/}
                <EnglishTwo/>                      
                {/*실용 영어*/}
                <PracticalEng/> 
                {/*영어 독해와 작문*/}
                <ReadWriteEng/>
                {/*영어권 문화*/}
                <CultureEng/> 
                {/*심화 영어I*/}
                <AdvEng/>
                {/*진로 영어*/}
                <cultureEng/>
                {/*심화 영어 독해 I*/}
                <AdvReadEng/>
              </div>
          </div>
      </div>
  )
}
