export default function Table() {
    return(
        <div className='flex flex-col'>
          {/*테이블*/}
          <div className='mt-[164px] overflow-hidden text-[#5A5A5A] rounded-[19px] border border-[#D5D5D5] shadow-md'>
            <table className='min-w-full divide-y divide-[#D5D5D5]'>
              <thead>
                {/*과(레슨)*/}
                <tr className='divide-x divide-[#D5D5D5]'>
                  <th className="w-1/6 border-r border-[#D5D5D5] text-[#444444] text-[20px] font-['Gsans']"> 
                    과(레슨)
                  </th>
                  <th>
                    <div className="flex flex-col px-[30px] py-[20px] gap-y-[15px] font-['Pretendard'] text-[18px] text-[#5A5A5A]">
                      <div className='flex justify-between'>
                        <button >1과</button>
                        <button >2과</button>
                        <button >3과</button>
                        <button >4과</button>
                        <button >5과</button>
                        <button >6과</button>
                        <button >7과</button>
                        <button >8과</button>
                        <button >9과</button>
                        <button >10과 </button>
                      </div>
                      <div className="flex justify-between font-['Pretendard'] text-[16px] text-[#5A5A5A]">
                        <button>Special Lesson</button>
                        <button>Special Lesson1</button>
                        <button>Special Lesson2</button>
                        <button>Advanced Reading1</button>
                        <button>Advanced Reading2</button>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {/*자료유형*/}
                <tr className='divide-x divide-[#D5D5D5]'>
                  <th className="w-1/6 border-r border-[#D5D5D5] text-[#444444] text-[20px] font-['Gsans']">
                    자료유형
                  </th>
                  <th>
                    {/* <div className="flex flex-col px-[30px] py-[20px] gap-y-[15px] font-['Pretendard'] text-[18px] text-[#5A5A5A]">
                      <div className='flex justify-between'>
                        <button>변형문제</button>
                        <button>본문분석</button>
                        <button>단계별학습</button>
                        <button>워크북</button>
                        <button>어법</button>
                        <button>독해</button>
                        <button>객관식</button>
                        <button>주관식</button>
                        <button>서술형</button>
                        <button>혼합</button>                 
                      </div>
                      <div className="flex justify-between ">
                        <button>빈출</button>
                        <button>기출</button>
                        <button>배열</button>
                        <button>해석</button>
                        <button>영작</button>
                        <button>빈칸</button>
                      </div>
                    </div> */}

                    <div className="grid grid-cols-10 auto-rows-auto px-[20px] py-[13px] gap-x-[1px] gap-y-[14px] font-['Pretendard'] text-[18px] text-[#5A5A5A]">
                      <button>변형문제</button>
                      <button>본문분석</button>
                      <button>단계별학습</button>
                      <button>워크북</button>
                      <button>어법</button>
                      <button>독해</button>
                      <button>객관식</button>
                      <button>주관식</button>
                      <button>서술형</button>
                      <button>혼합</button>
                      <button>빈출</button>
                      <button>기출</button>
                      <button>배열</button>
                      <button>해석</button>
                      <button>영작</button>
                      <button>빈칸</button>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

      <div className="font-['Gsans'] flex justify-end text-[17px] mt-[16px]">
        <button className="text-grey bg-white px-[19px] pt-[7px] pb-[3px] ml-[11px]
        border rounded-full shadow-tag 
        hover:bg-gray-700 hover:text-white">목록으로</button>
        <button className="text-grey bg-white px-[19px] py-[5px] ml-[11px]
        border rounded-full shadow-tag 
        hover:bg-gray-700 hover:text-white
        flex items-center">
          <img src="/searchReset.png" className="w-[19.61px] h-[18.49px] mr-[9.9px]"/>
          <p className='pt-[3px]'>선택 초기화</p>
          </button>
        <button className="text-white bg-[#343434] px-[19px] pt-[7px] pb-[3px] ml-[11px]
        border rounded-full shadow-tag 
        hover:bg-blue">자료검색</button>
      </div>

    </div>

    )
    
}