function CommonLayout({title, children}){
  return (
    <div className="flex flex-row">
    <div className="flex flex-col font-['Gsans'] ml-[360px] pr-[29px] w-fit min-h-screen border-r border-gray-200">
      <div className="mt-[36px]">
        <p className="text-[20px]">{title}</p>
        <div className="border-b border-black w-[171px] mt-[11.5px] mb-[17.5px]"/>
        <button>· {title}</button><br/>
      </div>

      <div className="mt-[172px]">
        <button className="border flex items-center
        rounded-full bg-blue text-white 
        px-[20px] py-[10.1px]">
          FAQ
          <img src="/qnaIcon.png"  className="w-[25.04px] h-[20.81px] ml-[78px]"/>
          </button>
      </div>

      <div className="flex items-center
      border-t border-b border-gray 
      mt-[36.5px]
      pt-[24.5px] pb-[27.5px]">
        <img src="/kakaoTalk.png" className="w-[32.62px] h-[32.8px]"/>
        <button className="pl-[6.5px] text-left">
          <p className="text-[13px]">카톡상담</p>
          <p className="text-[12px] font-bold">@sudalSample</p>
        </button>
      </div>
    </div>
    {children}
    </div>
  )
}

function FreeLayout({children}){
  return <CommonLayout title="자유게시판" children={children}></CommonLayout>
}

function InfoLayout({children}){
  return <CommonLayout title="정보게시판" children={children}></CommonLayout>
}

function QnALayout({children}){
  return <CommonLayout title="Q&A게시판" children={children}></CommonLayout>
}

export {FreeLayout, InfoLayout, QnALayout};