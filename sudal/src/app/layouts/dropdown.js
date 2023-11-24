'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 마우스 이벤트 핸들러
  const handleMouseEnter = () => {
    alert("hi");
    setIsOpen(true);
  }
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <li className='group mr-32 relative' onMouseEnter={handleMouseEnter}>
      <Link href="/materials" onMouseEnter={handleMouseEnter}>학습자료</Link>
      <div className='w-full h-80 flex justify-center bg-skyblue'>
        <div 
          className={`w-4/6 h-270 rounded-b-lg bg-white shadow-inner ${isOpen ? 'block' : 'hidden'}`}
        >
          {/* 드롭다운 메뉴 내용 */}
        </div>
      </div>
    </li>
  );
};

export default DropdownMenu;
