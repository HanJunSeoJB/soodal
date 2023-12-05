
export default function Search() {
  return (
    <div>
      <h3 className="mt-[41px] ml-[35.5px] text-3xl font-GmarketSans">
        2. 자료검색
      </h3>
      <div className="relative mt-10 w-1/3 h-24 flex flex-row items-center hover:w-1/4 transition-all">
        <img src="/searchimage.png" className="z-10"/>
        <input type="text" id="text-input" name="text-input" placeholder="자료 필요하면 500원~"
        className="absolute rounded-full border w-full z-0 h-1/2 ml-5"/>
        <button className="z-10 absolute right-0">
          <img src="search.png" alt="Search"/>
        </button>
      </div>
    </div>
  )
}