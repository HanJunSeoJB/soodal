export default function Table() {
    return(
        <div>
          <table className="table-auto mt-[164px] ml-[35.5px] w-[964px] h-[144.5px] border-separate rounded-[20px] border-2 ">
            <thead>
              <tr>
                <td className="border-r border-b w-[144.5px] text-center text-[20px]">과(레슨)</td>
                <td className=" w-[819.5px] rounded-tr-[20px]">
                  <div className="flex-row justify-center mr- mb-2 text-[18px] gap-x-14 px-2 py-1 font-[pretendard]">
                    <button className="ml-12">1과</button>
                    <button className="ml-12">2과</button>
                    <button className="ml-12">3과</button>
                    <button className="ml-12">4과</button>
                    <button className="ml-12">5과</button>
                    <button className="ml-12">6과</button>
                    <button className="ml-12">7과</button>
                    <button className="ml-12">8과</button>
                    <button className="ml-12">9과</button>
                    <button className="ml-12">10과 </button>
                  </div>
                  <div className="flex justify-between text-[18px] px-2 py-1 font-[pretendard]">
                    <button className="m-1">Special Lesson</button>
                    <button className="m-1">Special Lesson1</button>
                    <button className="m-1">Special Lesson2</button>
                    <button className="m-1">Advanced Reading1</button>
                    <button className="m-1">Advanced Reading2</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r w-[144.5px] text-center text-[20px]">자료유형</td>
                  <td className="border-t flex justify-between mb-2 text-[18px] px-2 py-1 font-[pretendard]">
                    <button className="m-1">변형문제</button>
                    <button className="m-1">본문분석</button>
                    <button className="m-1">단계별학습</button>
                    <button className="m-1">워크북</button>
                    <button className="m-1">어법</button>
                    <button className="m-1">독해</button>
                    <button className="m-1">객관식</button>
                    <button className="m-1">주관식</button>
                    <button className="m-1">서술형</button>
                  </td>
                  <td className="flex justify-between text-[18px] px-2 py-1 font-[pretendard]">
                    <button className="m-1">혼합</button>
                    <button className="m-1">빈출</button>
                    <button className="m-1">기출</button>
                    <button className="m-1">배열</button>
                    <button className="m-1">해석</button>
                    <button className="m-1">영작</button>
                    <button className="m-1">빈칸</button>
                </td>
              </tr>
            </thead>
          </table>

      <div className="font-['Gsans'] flex ml-[601px] text-[17px] mt-[16px]">
        <button className="text-gray-700 bg-white px-[19px] py-[5px] ml-[11px]
        border rounded-full shadow 
        hover:bg-gray-700 hover:text-white">목록으로</button>
        <button className="text-gray-700 bg-white px-[19px] py-[5px] ml-[11px]
        border rounded-full shadow 
        hover:bg-gray-700 hover:text-white
        flex items-center">
          <img src="/searchReset.png" className="w-[19.61px] h-[18.49px] mr-[9.9px]"/>선택 초기화</button>
        <button className="text-white bg-gray-700 px-[19px] py-[5px] ml-[11px]
        border rounded-full shadow 
        hover:bg-blue">자료검색</button>
      </div>

      </div>

    )
    
}