'use client'
import {useState} from 'react';
import Image from 'next/image'
import test from '../../../public/images/imagetest1.png'
import LeftArrow from '../../../public/images/leftArrow.png'
import RightArrow from '../../../public/images/rightArrow.png'

export default function Carousel() {
  // 학습자료 이미지가 들어가면 됩니다.
  const images = [
    test,test,test,test
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  
  return (
    <div className='flex flex-col items-center mt-[63px]'>
      {/*캐러셀*/}
      <div className='flex justify-center'>
        {/*왼쪽 버튼*/}
        <button onClick={previousSlide} className='flex items-center mr-[27px]'>
          <Image src={LeftArrow} className='w-auto h-auto'/>
        </button>
        {/*캐러셀 영역(뷰포트)*/}
        <div className='relative h-[378px] w-[500px] overflow-hidden'>
          <div className='flex transition ease-out duration-40' style={{transform: `translateX(-${current * 51.5}%)`}}>
            {/*카드*/}
            {
              images.map((n, i)=>{
                return(
                  <div className='flex justify-center flex-shrink-0 w-[242.5px] h-[378px] bg-[#E8E8E8] rounded-[12px] border border-[#707070] mr-[15px]'>
                    <Image src={images[i]} className='object-contain w-auto h-auto'/>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/*오른쪽 버튼*/}
        <button onClick={nextSlide} className='flex items-center ml-[27px]'>
          <Image src={RightArrow} className='w-auto h-auto'/>
        </button>
      </div>

      {/*인디케이터*/}
      <div className="flex justify-center mt-[19px] gap-[5px] w-full">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-[12px] h-[12px] cursor-pointer  ${
                i == current ? "bg-[#005CA6]" : "bg-white border border-[#707070]"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  )
}