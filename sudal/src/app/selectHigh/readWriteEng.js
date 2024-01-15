export default function ReadWriteEng() {
  return (
  <div className='flex flex-row w-[183px] h-auto'>
    <div className='flex justify-center w-[182px]'>
      <div className='flex flex-col min-w-[106px] h-auto'>
        <div className="flex justify-center h-[45px] text-[19px] text-[#303030] font-['GsansBold']">
          <p>영어 독해와 작문</p>
        </div>
        <div className="flex flex-col h-[314px] items-center text-[15px] text-[#555555] font-['GsansMedium'] gap-y-[10px]">
          <a href="#">NE능률(김성곤)</a>
          <a href="#">YBM(신정현)</a>
          <a href="#">동아(권혁승)</a>
          <a href="#">비상(김진완)</a>
          <a href="#">천재(안병규)</a>
        </div>                                            
      </div>
    </div>
    <div className='flex flex-col'>
      <div className='h-[45px]'></div>
      <div className="flex h-[314px]"></div>
    </div>
  </div> 
  )
}