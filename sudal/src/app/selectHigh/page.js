export default function SelectHigh() {
  return (
      // 전체 viewport margin 설정
      <div className='mt-[41px] ml-[36px]'>
          <div className='flex flex-col w-auto h-[754px]'>
              {/*네비게이션 바*/}
              <div className='flex flex-row w-[964px] h-[31px]'>
                <div className="flex text-[23px] text-[#303030] font-['GsansBold']">
                  <p/>1. 과목선택
                </div>
                <div className="flex text-[13px] text-[#303030] font-['Gsanslight'] mt-0 ml-auto">
                  <p/>Home &gt; 학습자료 &gt; 고등내신 &gt; 자료찾기
                </div>
              </div>
              {/*자료목록*/}
              <div className='flex grid grid-cols-5 gap-[42px] w-[964px] h-auto mt-[24px] rounded-[19px] border border-[#D5D5D5] p-[50px] shadow-md'>
                {/*영어*/}
                <div className='flex flex-col w-[147px] h-[359px]'>
                  <div className="flex justify-center w-[106px] h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>영어</p>
                  </div>
                  <div className="flex flex-row w-auto h-auto">
                    <div className="flex flex-col items-center w-[106px] h-[314px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김성곤)</a>
                      <a href="#">NE능률(양현권)</a>
                      <a href="#">YBM(박준언)</a>
                      <a href="#">YBM(한상호)</a>
                      <a href="#">금성(최인철)</a>
                      <a href="#">동아(이병민)</a>
                      <a href="#">비상(홍민표)</a>
                      <a href="#">지학사(민찬규)</a>
                      <a href="#">천재(김태영)</a>
                      <a href="#">천재(이재영)</a>
                    </div>
                    <div className="flex w-[41px] h-[314px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div>    

                {/*영어I*/}
                <div className='flex flex-col w-[147px] h-[359px]'>
                  <div className="flex justify-center w-[106px] h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>영어 I</p>
                  </div>
                  <div className="flex flex-row w-[147px] h-[359]">
                    <div className="flex flex-col items-center w-[106px] h-[314px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김성곤)</a>
                      <a href="#">YBM(박준언)</a>
                      <a href="#">YBM(한상호)</a>
                      <a href="#">교학사(강문구)</a>
                      <a href="#">금성(최인철)</a>
                      <a href="#">동아(권혁승)</a>
                      <a href="#">비상(홍민표)</a>
                      <a href="#">지학사(민찬규)</a>
                      <a href="#">천재(이재영)</a>
                    </div>
                    <div className="flex w-[41px] h-[314px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div>                

                {/*영어II*/}
                <div className='flex flex-col w-[147px] h-[359px]'>
                  <div className="flex justify-center w-[106px] h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>영어 II</p>
                  </div>
                  <div className="flex flex-row w-[147px] h-[359]">
                    <div className="flex flex-col items-center w-[106px] h-[314px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김성곤)</a>
                      <a href="#">YBM(박준언)</a>
                      <a href="#">YBM(한상호)</a>
                      <a href="#">금성(최인철)</a>
                      <a href="#">동아(권혁승)</a>
                      <a href="#">비상(홍민표)</a>
                      <a href="#">지학사(민찬규)</a>
                      <a href="#">천재(이재영)</a>
                    </div>
                    <div className="flex w-[41px] h-[314px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div>                
              
                {/*실용 영어*/}
                <div className='flex flex-col w-[147px] h-[359px]'>
                  <div className="flex justify-center w-[106px] h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>실용 영어</p>
                  </div>
                  <div className="flex flex-row w-[147px] h-[359]">
                    <div className="flex flex-col items-center w-[106px] h-[314px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김성곤)</a>
                      <a href="#">YBM(박준언)</a>
                      <a href="#">천재(안병규)</a>
                    </div>
                    <div className="flex w-[41px] h-[314px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div>                
               
                {/*영어 독해와 작문*/}
                <div className='flex flex-col w-auto h-[359px]'>
                  <div className="flex justify-center w-auto h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>영어 독해와 작문</p>
                  </div>
                  <div className="flex flex-col items-center w-auto h-[314px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김성곤)</a>
                      <a href="#">YBM(신정현)</a>
                      <a href="#">동아(권혁승)</a>
                      <a href="#">비상(김진완)</a>
                      <a href="#">천재(안병규)</a>
                  </div>
                </div>                
             
                {/*영어권 문화*/}
                <div className='flex flex-col w-[147px] h-[200px]'>
                  <div className="flex justify-center w-[106px] h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>영어권 문화</p>
                  </div>
                  <div className="flex flex-row w-[147px] h-[155px]">
                    <div className="flex flex-col items-center w-[106px] h-[156px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김정렬)</a>
                    </div>
                    <div className="flex w-[41px] h-[155px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div> 


                {/*심화 영어I*/}
                <div className='flex flex-col w-[147px] h-[200px]'>
                  <div className="flex justify-center w-[106px] h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>심화 영어I</p>
                  </div>
                  <div className="flex flex-row w-[147px] h-[155px]">
                    <div className="flex flex-col items-center w-[106px] h-[156px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김정렬)</a>
                      <a href="#">YBM(신정현)</a>
                      <a href="#">천재(이재영)</a>
                    </div>
                    <div className="flex w-[41px] h-[155px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div>      

                {/*진로 영어*/}
                <div className='flex flex-col w-[147px] h-[200px]'>
                  <div className="flex justify-center w-[106px] h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>진로 영어</p>
                  </div>
                  <div className="flex flex-row w-[147px] h-[155px]">
                    <div className="flex flex-col items-center w-[106px] h-[156px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(김정렬)</a>
                      <a href="#">YBM(박준언)</a>
                    </div>
                    <div className="flex w-[41px] h-[155px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div>

                {/*심화 영어 독해I*/}
                <div className='flex flex-col w-[147px] h-[200px]'>
                  <div className="flex justify-center w-auto h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
                    <p>심화 영어 독해I</p>
                  </div>
                  <div className="flex flex-row w-[147px] h-[155px]">
                    <div className="flex flex-col items-center w-auto h-[156px] text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
                      <a href="#">NE능률(허명혜)</a>
                      <a href="#">YBM(신정현)</a>
                      <a href="#">천재(안병규)</a>
                    </div>
                    <div className="flex w-auto h-[200px] border-r border-[#D5D5D5]"></div>
                  </div>
                </div>         




              </div>
          </div>
      </div>
  )
}
