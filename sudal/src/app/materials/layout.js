export default function MaterialsLayout({children}){
  return(
    <div className="flex flex-row">
    <div className="flex flex-col font-['Gsans'] ml-[360px] pr-[29px] w-fit min-h-screen border-r border-gray-200">
      <div className="mt-[36px]">
        <p className="text-[20px]">고등자료</p>
        <div className="border-b border-black w-[171px] mt-[11.5px] mb-[17.5px]"/>
        <p>· 고등내신</p>
        <p>· 수능자료</p>
        <p>· 참고서 답지</p>
      </div>

      <div className="mt-[45px]">
        <p className="text-[20px]">중등자료</p>
        <div className="border-b border-black w-[171px] mt-[11.5px] mb-[17.5px]"/>
        <p>· 중등내신</p>
        <p>· 참고서 답지</p>
      </div>

      <div className="mt-[45px]">
        <p className="text-[20px]">인기자료</p>
        <div className="border-b border-black w-[171px] mt-[11.5px] mb-[17.5px]"/>
        <p>· TOP 20</p>
        <p>· 최신자료</p>
      </div>

      <div className="mt-[101px]">
        <p className="border flex items-center
        rounded-full bg-blue text-white 
        px-[20px] py-[10.1px]">
          FAQ
          <img src="/qnaIcon.png"  className="w-[25.04px] h-[20.81px] ml-[78px]"/>
          </p>
      </div>

      <div className="flex items-center
      border-t border-b border-gray 
      mt-[36.5px]
      pt-[24.5px] pb-[27.5px]">
        <img src="/kakaoTalk.png" className="w-[32.62px] h-[32.8px]"/>
        <div className="pl-[6.5px]">
          <p className="text-[13px]">카톡상담</p>
          <p className="text-[12px] font-bold">@sudalSample</p>
        </div>
      </div>
    </div>
    {children}
    </div>
  )
}