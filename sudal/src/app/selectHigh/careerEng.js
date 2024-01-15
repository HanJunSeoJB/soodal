export default function CareerEng() {
  return (
    <div className='flex flex-row w-[183px] h-auto'>
    <div className='flex justify-center w-[182px]'>
      <div className='flex flex-col min-w-[106px] h-auto'>
        <div className="flex justify-center h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
          <p>진로 영어</p>
        </div>
        <div className="flex flex-col h-[155px] items-center text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
          <a href="#">NE능률(김정렬)</a>
          <a href="#">YBM(박준언)</a>
        </div>                                            
      </div>
    </div>
    <div className='flex flex-col'>
      <div className='h-[45px]'></div>
      <div className="flex h-[155px] border-r border-[#D5D5D5]"></div>
    </div>
  </div> 
  )
}