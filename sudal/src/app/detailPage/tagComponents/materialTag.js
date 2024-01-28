import Image from 'next/image'
import React from 'react';
import {connectDB} from "/util/database.js"

export default async function MaterialTag() {

  //const db = (await connectDB).db('materials');
  //let result =  await db.collection('high').find().toArray();
  
  return (
    <div className='flex flex-col mb-[37px]'>
      <p className="flex text-[20px] text-[#303030] font-['GsansBold']">태그</p>
      <div className='flex mt-[11px] mb-[16px] border-t-[0.5px] border-[#D5D5D5]'></div>
      {/*태그 들어가는 부분*/}
      <div className='flex flex-row'>
        {/*유무료/자료종류 - 이후 추가 예정*/}
        {/*
        <div className="rounded-full border border-[#1D8EF1] w-auto px-[10px] py-[3px] mr-[6px] text-[14px] text-[#1D8EF1] font-[PretendardMedium]">
          무료
        </div>
        <div className="rounded-full border border-[#1D8EF1] w-auto px-[10px] py-[3px] mr-[6px] text-[14px] text-[#1D8EF1] font-[PretendardMedium]">
          자료
        </div>
        */}

        {/*세부태그*/}
        <div className="rounded-full border border-[#444444] w-auto px-[10px] py-[3px] mr-[6px] text-[14px] text-[#444444] font-[PretendardMedium]">
          저자
        </div>
        <div className="rounded-full border border-[#444444] w-auto px-[10px] py-[3px] mr-[6px] text-[14px] text-[#444444] font-[PretendardMedium]">
          출판사
        </div>
        <div className="rounded-full border border-[#444444] w-auto px-[10px] py-[3px] mr-[6px] text-[14px] text-[#444444] font-[PretendardMedium]">
          과목
        </div>
      </div>
    </div>
  )
}