'use client'
import {useEffect} from 'react';

export default function CommentStarRating({rating}) {

  const ratingMask = 5 - rating;
  const starSize = 16, maxStar = 5, gutter = 4;
  const maskSize = starSize * ratingMask + (Math.floor(ratingMask) * gutter);

  useEffect(() => {
    // useEffect를 사용하여 컴포넌트가 렌더링된 후에 코드를 실행합니다.
    const maskElement = document.getElementById('commentmask');
    if (maskElement) {
      // 'maskSize'를 기반으로 'mask' 엘리먼트의 너비를 동적으로 설정합니다.
      maskElement.style.width = `${maskSize}px`;
    }
  }, [maskSize]);

  return (
    <div className='flex flex-row mt-[6px]'>
      {/*별점*/}
      <div className='flex relative items-center'>
        {/*overlay*/}
        <div id='commentmask' className='absolute mix-blend-color top-0 right-0 bottom-0 bg-white opacity-100 z-10 opacity: unset'>
        </div>
        {/*star*/}
        <div className='w-[16px] h-[15px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.359" height="15.558" viewBox="0 0 16.359 15.558">
            <path id="패스_937" data-name="패스 937" d="M8.179,0,5.651,5.122,0,5.943,4.089,9.93l-.965,5.629L8.179,12.9l5.055,2.658L12.269,9.93l4.09-3.987-5.652-.821L8.179,0Z" transform="translate(0 0)" fill="#fc0"/>
          </svg>
        </div>
        <div className='w-[16px] h-[15px] ml-[4px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.359" height="15.558" viewBox="0 0 16.359 15.558">
            <path id="패스_937" data-name="패스 937" d="M8.179,0,5.651,5.122,0,5.943,4.089,9.93l-.965,5.629L8.179,12.9l5.055,2.658L12.269,9.93l4.09-3.987-5.652-.821L8.179,0Z" transform="translate(0 0)" fill="#fc0"/>
          </svg>
        </div>
        <div className='w-[16px] h-[15px] ml-[4px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.359" height="15.558" viewBox="0 0 16.359 15.558">
            <path id="패스_937" data-name="패스 937" d="M8.179,0,5.651,5.122,0,5.943,4.089,9.93l-.965,5.629L8.179,12.9l5.055,2.658L12.269,9.93l4.09-3.987-5.652-.821L8.179,0Z" transform="translate(0 0)" fill="#fc0"/>
          </svg>
        </div>
        <div className='w-[16px] h-[15px] ml-[4px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.359" height="15.558" viewBox="0 0 16.359 15.558">
            <path id="패스_937" data-name="패스 937" d="M8.179,0,5.651,5.122,0,5.943,4.089,9.93l-.965,5.629L8.179,12.9l5.055,2.658L12.269,9.93l4.09-3.987-5.652-.821L8.179,0Z" transform="translate(0 0)" fill="#fc0"/>
          </svg>
        </div>
        <div className='w-[16px] h-[15px] ml-[4px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.359" height="15.558" viewBox="0 0 16.359 15.558">
            <path id="패스_937" data-name="패스 937" d="M8.179,0,5.651,5.122,0,5.943,4.089,9.93l-.965,5.629L8.179,12.9l5.055,2.658L12.269,9.93l4.09-3.987-5.652-.821L8.179,0Z" transform="translate(0 0)" fill="#fc0"/>
          </svg>
        </div>
      </div>
      {/*평점*/}
      <div className="flex ml-[4px] text-[13px] text-[#B2B2B2] font-['PretendardLight']">
        <p>({rating})</p>
      </div>
    </div>
  )
}