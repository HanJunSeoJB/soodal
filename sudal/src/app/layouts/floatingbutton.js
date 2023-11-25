'use client';
import React from 'react';
import topButton from '../../../public/images/topButton.png'
import Image from 'next/image'

const FloatingButton = () => {

  const ScrollToTopButton = () => {
    window.scrollTo ({
        top: 0,
        behavior: 'smooth'
    })
  }

  return (
    <div>
        <button className='fixed bottom-20 right-20 z-50 ' onClick={ScrollToTopButton}>
            <Image src={topButton} className='w-70 h-70'></Image>
        </button>
    </div>
  );
};

export default FloatingButton;
