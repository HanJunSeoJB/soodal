import Banner from '../../public/images/banner.png'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <Image src={Banner} alt='배너' className="w-full h-auto"></Image>
      <p className="mt-14 flex justify-center font-['Gsanslight'] text-2xl">어떤 걸 찾고있수달?</p>
      {/*인기자료 탭 */}
      <div>

      </div>
    </div>
  )
}