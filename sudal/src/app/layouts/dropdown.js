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
      <li onMouseOver={handleMouseEnter} className='group mr-32 relative'>
        <Link href="/materials">학습자료</Link>
      </li>
      <div className='mt-7 w-full h-80 absolute flex justify-center bg-skyblue left-0 shadow-little'>
          <div onMouseLeave={handleMouseLeave} className={`w-4/6 h-270 rounded-b-lg bg-white shadow-inner flex flex-row ${isOpen ? 'block' : 'hidden'}`}>
            {/* 드롭다운 메뉴 내용 */}

            {/*고등 자료*/}
            <div className='w-auto h-40 flex flex-col mt-9 ml-14 items-center'>
              <p className='text-xl font-bold mb-6'>고등자료</p>
              <Link href='/materials' className='text-base mb-6'>내신자료</Link>
              <Link href='/materials' className='text-base mb-6'>수능자료</Link>
              <Link href='/materials' className='text-base'>참고서 답지</Link>
            </div>
            {/*사이드 바 */}
            <div className='h-44  border bg-grey ml-14 mt-7'></div>
            {/*중등 자료 */}
            <div className='w-auto h-28 flex flex-col mt-9 ml-14 items-center'>
              <p className='text-xl font-bold mb-6'>중등자료</p>
              <Link href='/materials' className='text-base mb-6'>내신자료</Link>
              <Link href='/materials' className='text-base'>참고서 답지</Link>
            </div>
            {/*사이드 바 */}
            <div className='h-44  border bg-grey ml-14 mt-7'></div>
            {/*인기 자료 */}
            <div className='w-auto h-28 flex flex-col mt-9 ml-14 items-center'>
              <p className='text-xl font-bold mb-6'>인기자료</p>
              <Link href='/materials' className='text-base mb-6'>인기자료 TOP20</Link>
              <Link href='/materials' className='text-base'>최신자료</Link>
          </div>
        </div>
      </div>
  </div>
  );
};

export default DropdownMenu;
