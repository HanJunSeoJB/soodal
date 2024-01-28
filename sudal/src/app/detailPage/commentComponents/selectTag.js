import React from 'react';
import {useState} from 'react';

export default function SelectTag({ clickModal }) {
  const handleCloseModal = () => {
    clickModal();
  };

  const handleInnerClick = (e) => {
    // 내부 div를 클릭해도 부모의 클릭 이벤트가 실행되지 않도록 함
    e.stopPropagation();
  };

  const onClick = (e) => {
    console.log(e);
    const button = e.target;
    button.classList.toggle('active');
  };


  return (
    <div className='fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50'>
      <div className='fixed w-1/2 h-auto rounded-[19px] bg-white border border-[#D5D5D5] py-[50px] px-[50px] shadow-md' onClick={handleInnerClick}>
        <button className="absolute top-[21px] right-[32px] text-[20px] text-[#9C9C9C] font-['Gsans']"
        onClick={handleCloseModal}>X</button>
        <div className='flex flex-col'>
          {/*제목*/}
          <div className='flex items-end'>
            <p className="text-[21px] text-[#303030] font-['GsansBold']">어떤 점이 좋았나요?</p> &nbsp;
            <p className="text-[17px] text-[#303030] font-['Gsans'] mb-[1px]">(1개 ~ 5개)</p>
          </div>
          <p className="text-[16px] text-[#303030] font-['PretendardMedium']">이 자료에 어울리는 키워드를 골라주세요</p>
          <div className='flex mt-[20px] mb-[20px] border-dashed border-[0.5px] border-[#D5D5D5]'></div>
          {/*태그*/}
          <div className='flex flex-row justify-center gap-x-auto'>
            {/*가격*/}
            <div className='flex flex-col justify-center items-center'>
              <p className="flex mb-[9px] text-[18px] text-[#303030] font-['Gsans']">가격</p>
              <div className='flex flex-col gap-y-[7px]'>
                <button
                  className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] font-['Gsans'] shadow-md bg-[#005CA6] text-white"
                  data-id='button1'
                  onClick={onClick}>
                  가격이 저렴해요
                </button>
                <button
                  className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] font-['Gsans'] shadow-md bg-[#005CA6] text-white"
                  data-id='button2'
                  onClick={onClick}>
                  가격이 저렴해요
                </button>
              </div>
            </div>

            {/*효과*/}
            <div className='flex flex-col justify-center items-center'>
              <p className="flex mb-[9px] text-[18px] text-[#303030] font-['Gsans']">효과</p>
              <div className='flex flex-col gap-y-[7px]'>
                <button
                  className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] font-['Gsans'] shadow-md bg-[#005CA6] text-white"
                  onClick={onClick}>
                  가격이 저렴해요
                </button>
                <button
                  className="rounded-full border border-[#D5D5D5] w-auto px-[23px] pt-[4px] pt-[2px] mr-[6px] text-[14px] font-['Gsans'] shadow-md bg-[#005CA6] text-white"
                  onClick={onClick}>
                  가격이 저렴해요
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}