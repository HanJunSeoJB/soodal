'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 마우스 이벤트 핸들러
  const handleMouseEnter = () => {
    setIsOpen(true);
  }
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className='w-auto'>
      <li onMouseOver={handleMouseEnter} className='group mr-32 relative hover:text-[#005CA6]'>
        <Link href="/materials">학습자료</Link>
      </li>
          <div onMouseLeave={handleMouseLeave} className={
            `mt-7
            w-4/6
            absolute
            left-0 right-0 mx-auto
            h-270
            rounded-b-lg
            bg-white
            shadow-inner
            flex flex-row
            ${isOpen ? 'block' : 'hidden'}
            z-20`
            }>

            {/*고등 자료*/}
            <div className='w-auto h-40 flex flex-col mt-9 ml-14 items-center'>
              <p className='text-xl font-bold mb-6'>고등자료</p>
              <Link href='/materials' className='text-base mb-6 hover:text-[#005CA6]'>내신자료</Link>
              <Link href='/materials' className='text-base mb-6 hover:text-[#005CA6]'>수능자료</Link>
              <Link href='/materials' className='text-base hover:text-[#005CA6]'>참고서 답지</Link>
            </div>
            {/*사이드 바 */}
            <div className='h-44  border bg-grey ml-14 mt-7'></div>
            {/*중등 자료 */}
            <div className='w-auto h-28 flex flex-col mt-9 ml-14 items-center'>
              <p className='text-xl font-bold mb-6 '>중등자료</p>
              <Link href='/materials' className='text-base mb-6 hover:text-[#005CA6]'>내신자료</Link>
              <Link href='/materials' className='text-base hover:text-[#005CA6]'>참고서 답지</Link>
            </div>
            {/*사이드 바 */}
            <div className='h-44  border bg-grey ml-14 mt-7'></div>
            {/*인기 자료 */}
            <div className='w-auto h-28 flex flex-col mt-9 ml-14 items-center'>
              <p className='text-xl font-bold mb-6 '>인기자료</p>
              <Link href='/materials' className='text-base mb-6 hover:text-[#005CA6]'>인기자료 TOP20</Link>
              <Link href='/materials' className='text-base hover:text-[#005CA6]'>최신자료</Link>
          </div>
        </div>
      </div>
  );
};

export default DropdownMenu;