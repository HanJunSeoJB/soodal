import Banner from '../../public/images/banner.png'
import Image from 'next/image'
import DataTab from './layouts/dataTab'
export default function Home() {
  return (
    <div>
      <Image src={Banner} alt='배너' className="w-full h-auto"></Image>
      <p className="mt-14 flex justify-center font-['Gsanslight'] text-2xl">어떤 걸 찾고있수달?</p>
      {/*테스트 */}
      <div className='mt-0 w-full flex justify-center mb-24 h-fit'>
        <div className="relative w-1/3 h-24 flex flex-row items-center hover:w-1/4 transition-all">
          <img src="/searchimage.png" className="z-10"/>
          <input type="text" id="text-input" name="text-input" placeholder="자료 필요하면 500원~"
          className="absolute rounded-full border w-full z-0 h-1/2 ml-5"/>
          <button className="z-10 absolute right-0">
            <img src="search.png" alt="Search"/>
          </button>
        </div>
      </div>
      {/*인기자료 탭 */}
      <div className='mb-9'>
      <DataTab/>
      </div>
      {/*최신자료 탭 */}
      <DataTab/>
    </div>
  )
}