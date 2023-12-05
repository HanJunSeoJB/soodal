export default function Table() {
    return(
        <div>
          <table className="table-auto mt-[164px] ml-[35.5px] w-[964px] h-[144.5px] border-separate rounded-[20px] border-2 ">
            <thead>
              <tr>
                <td className="border-r border-b w-[144.5px] text-center text-[20px]">과(레슨)</td>
                <td className=" w-[819.5px] rounded-tr-[20px]">
                  <div className="flex justify-between mb-2 text-[18px] px-2 py-1 font-[pretendard]">
                    <button className="">1과</button>
                    <button className="m-1">2과</button>
                    <button className="m-1">3과</button>
                    <button className="m-1">4과</button>
                    <button className="m-1">5과</button>
                    <button className="m-1">6과</button>
                    <button className="m-1">7과</button>
                    <button className="m-1">8과</button>
                    <button className="m-1">9과</button>
                    <button className="m-1">10과</button>
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

      </div>

    )
    
}