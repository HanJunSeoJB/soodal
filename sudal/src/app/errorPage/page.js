'use client'
import Image from 'next/image'
import ERROR from 'public/images/ERROR.png'

export default function ErrorPage() {
    return(
      <div className='flex flex-col justify-center items-center mx-6 mt-52 mb-24'>
        <Image src={ERROR} className='w-1/5 h-auto'/>
        <p className="text-[30px] text-[#444444] font-['Gsans'] mt-[20px]">
          원하시는 페이지를 찾을 수가 없습니다
        </p>
        <p className="text-[17px] text-[#8B8B8B] font-['Gsans'] mt-[10px]">
          존재하지 않는 주소이거나, 변경 또는 삭제되어 페이지를 찾을 수 없습니다.
        </p>
        <p className="text-[17px] text-[#8B8B8B] font-['Gsans']">
          궁금한 점을 고객센터를 통해 문의해주시면 친절하게 안내해 드리겠습니다.
        </p>
        <p className="text-[17px] text-[#8B8B8B] font-['Gsans']">
          감사합니다.
        </p>
      </div>
    )
}

    