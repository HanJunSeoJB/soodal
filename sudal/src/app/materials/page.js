export default function highschool(){
  return(
      <div>
          <h3 className="mt-[41px] ml-[35.5px] text-3xl font-GmarketSans">2. 자료검색</h3>
          <div style={{position: 'relative'}} className="group">
          <img src="/searchimage.png" className="absolute 
                   w-[82.44px] h-[99.53px] mt-[46px] ml-[80.5px] z-10" />
              <input type="text" id="text-input" name="text-input" 
                     className="bg-white border border-black transition-all duration-500 ease-in-out hover:w-[593px] pl-20 absolute 
                                h-[54px] w-[656px] mt-[71px] ml-[101.5px] rounded-full shadow-xl"
                     placeholder="자료 필요하면 500원~" 
                     />
              <button className="absolute w-6 h-6 ml-[704.5px] mt-[85px] transition-all duration-500 ease-in-out transform group-hover:translate-x-[-63px]">
                <img src="search.png" alt="Search" />
              </button>
          </div>
        
          <table className="table-auto mt-[236px] ml-[35.5px] w-[964px] h-[144.5px] border rounded-full">
            <tbody>
              <tr>
                <td className="border-r border-b w-[144.5px]">과(레슨)</td>
                <td className=" w-[819.5px]">
                  <div className="flex justify-between mb-2">
                    <button className="m-1">1과</button>
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
                  <div className="flex justify-between">
                    <button className="m-1">Special Lesson</button>
                    <button className="m-1">Special Lesson1</button>
                    <button className="m-1">Special Lesson2</button>
                    <button className="m-1">Advanced Reading1</button>
                    <button className="m-1">Advanced Reading2</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-r w-[144.5px]">자료유형</td>
                  <div className="border-t flex justify-between mb-2">
                    <button className="m-1">변형문제</button>
                    <button className="m-1">본문분석</button>
                    <button className="m-1">단계별학습</button>
                    <button className="m-1">워크북</button>
                    <button className="m-1">어법</button>
                    <button className="m-1">독해</button>
                    <button className="m-1">객관식</button>
                    <button className="m-1">주관식</button>
                    <button className="m-1">서술형</button>
                  </div>
                  <div className="flex justify-between">
                    <button className="m-1">혼합</button>
                    <button className="m-1">빈출</button>
                    <button className="m-1">기출</button>
                    <button className="m-1">배열</button>
                    <button className="m-1">해석</button>
                    <button className="m-1">영작</button>
                    <button className="m-1">빈칸</button>
                </div>
              </tr>
            </tbody>
          </table>
          



      </div>
  )
}