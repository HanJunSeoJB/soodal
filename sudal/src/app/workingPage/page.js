import Image from 'next/image'
import Mole from '../../../public/images/moleWorking.png'

export default function WorkingPage() {
    return(
      <div className='flex flex-col justify-center items-center mx-6 mt-36 mb-24'>
        <Image src={Mole} className='w-1/4 h-auto'/>
        <p className="text-[50px] text-[#444444] font-['Gsans'] mt-[20px]">
          페이지 <span className="text-[#005CA6]">작업</span> 중입니다
        </p>
        <p className="text-[17px] text-[#444444] font-['Gsans'] mt-[10px]">
          보다 좋은 서비스를 위해 페이지 작업 중입니다.
        </p>
        <p className="text-[17px] text-[#444444] font-['Gsans']">
          빠른 시일 내에 준비하도록 하겠습니다. 감사합니다.
        </p>
      </div>
    )
}

    