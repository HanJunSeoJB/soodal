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
              <div className='flex grid grid-cols-5 gap-[42px] items-center justify-center w-[964px] h-[699px] mt-auto rounded-[19px] border border-[#D5D5D5] p-[50px] shadow-0-3-6-[#D5D5D5]'>

              </div>
          </div>
      </div>
  )
}
