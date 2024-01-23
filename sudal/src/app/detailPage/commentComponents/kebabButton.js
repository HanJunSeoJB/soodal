'use client'
import {useState} from 'react';
import Image from 'next/image'
import KebabButtonImg from '/public/images/kebabButton.png'

export default function KebabButton() {
  return (
    <button id='info'>
      <Image src={KebabButtonImg} 
      className='w-auto h-auto'
      />
    </button>
  )
}