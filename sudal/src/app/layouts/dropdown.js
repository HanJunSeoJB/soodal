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
      <li className='group mr-32 relative' onMouseLeave={handleMouseLeave}>
        <Link href="/materials" onMouseOver={handleMouseEnter}>학습자료</Link>
      </li>
      <div className='w-full h-80 absolute flex justify-center bg-skyblue left-0'>
          <div className={`w-4/6 h-270 rounded-b-lg bg-white shadow-inner ${isOpen ? 'block' : 'hidden'}`}>
            {/* 드롭다운 메뉴 내용 */}
          </div>
        </div>
  </div>
  );
};

export default DropdownMenu;
