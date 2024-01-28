export default function Search() {
  return (
    <div>
      <div className='flex flex-row justify-between mt-[48px] '>
        <p className="text-[23px] text-[#303030] font-['Gsans']">
          2. 자료검색
        </p>
      <p className="text-[13px] text-[#303030] font-['Gsanslight']">Home &gt; 고등내신 &gt; 과목선택 &gt; 자료검색</p>
      </div>
      <div style={{ position: "relative" }} className="group">
        <img
          src="/searchimage.png"
          className="absolute w-[82.44px] h-[99.53px] mt-[39px] z-10"
        />
        <input
          type="text"
          id="text-input"
          name="text-input"
          className="bg-white border border-black transition-all duration-500 ease-in-out hover:w-[593px] pl-20 absolute 
                                h-[54px] w-[656px] mt-[64px] ml-[17px] rounded-full shadow-xl"
          placeholder="자료 필요하면 500원~"
        />
        <button className="absolute w-6 h-6 ml-[620px] mt-[78px] transition-all duration-500 ease-in-out transform group-hover:translate-x-[-63px]">
          <img src="search.png" alt="Search" />
        </button>
      </div>
    </div>
  )
}