'use client'
import Image from 'next/image'

export default function Carousel() {
  const images = [
    '/public/images/imagetest1.png',
    '/public/images/imagetest2.png',
    '/public/images/imagetest3.png',
  ];
  
  return (
    <div className='flex flex-col items-center mt-[63px]'>
      {/*캐러셀*/}
      <div className='flex flex-row justify-center'>
        {/*캐러셀 영역(뷰포트)*/}
        <div className='h-[378px] w-[503px] overflow-hidden'>
          {/*map으로 이미지 개수만큼 반복해서 생성*/}
          {
            images.map((n, i)=>{
              return(
                <div className='w-[243px] h-[378px] mr-[19px] hidden duration-700 ease-in-out'>
                  <Image src={images[i]} className='w-auto h-auto'/>
                </div>
              )
            })
          }
        </div>
      </div>
      {/*인디케이터*/}
      <div>

      </div>
    </div>
  )
}