import Banner from '../../public/images/banner.png'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <Image src={Banner} alt='배너' className="w-full h-auto"></Image>
    </div>
  )
}