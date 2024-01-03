import { SortAt, Title, Post } from "./pageComponent";

export default function BoardPage(){
  return(
    <div className="ml-[35.5px]">
      <Title/>
      <div className="flex flex-row mt-[29px] font=['Gsans'] h-[29.96px] text-[15px]">
        <select className="border pl-[17px] pr-[37.5px]">
          <option>제목</option>
          <option>내용</option>
          <option>작성자</option>
        </select>
        <input className="border ml-[5.5px] w-[350.5px] px-[5px]"></input>
        <button className="border bg-gray-700 text-white w-[71.5px] ml-[5.8px]">검색</button>
      </div>

      <div className="flex flex-row mt-[13px]">
        <SortAt/>
        <button className="border rounded-full
          text-gray-500 text-[17px] font-['Gsans']
          h-[23px] ml-[644px] px-[28px]">
          글쓰기
        </button>
      </div>

      <div className="flex flex-row items-center bg-gray-300 font-['PretendardMedium'] mt-[13px] text-gray-600 h-[41px]">
        <p className="pl-[245px]">제목</p>
        <p className="pl-[244px]">작성자</p>
        <p className="pl-[74px]">작성일</p>
        <p className="pl-[74px]">추천</p>
        <p className="pl-[50px]">스크랩</p>
        <p className="pl-[50px]">조회</p>
      </div>
      <Post/>
      <div className="flex justify-end mt-[56.3px]">
        <select className="border font-['PretendardMedium'] font-[15px]">
          <option>10개씩 보기</option>
          <option>20개씩 보기</option>
          <option>30개씩 보기</option>
        </select>
      </div>
      <div className="flex flex-row justify-center items-center font-['Gsans'] text-[16px] text-gray gap-x-[34px]">
          <button>{'<'}</button>
          <button>{'1'}</button>
          <button>{'2'}</button>
          <button>{'3'}</button>
          <button>{'4'}</button>
          <button>{'5'}</button>
          <button>{'>'}</button>
      </div>
    </div>
  )
}