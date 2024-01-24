import React from 'react';

export default function SelectTag({ clickModal }) {
  const handleCloseModal = () => {
    clickModal();
  };

  const handleInnerClick = (e) => {
    // 내부 div를 클릭해도 부모의 클릭 이벤트가 실행되지 않도록 함
    e.stopPropagation();
  };

  return (
    <div className='fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50'>
      <div className='fixed w-1/2 h-auto rounded-[19px] bg-white border border-[#D5D5D5] py-[50px] px-[25px] shadow-md' onClick={handleInnerClick}>
        <button className="absolute top-[21px] right-[32px] text-[20px] text-[#9C9C9C] font-['Gsans']"
        onClick={handleCloseModal}>X</button>
        <div className='flex flex-col'>
          <div className='flex items-end'>
            <p className="text-[21px] text-[#303030] font-['GsansBold']">어떤 점이 좋았나요?</p> &nbsp;
            <p className="text-[17px] text-[#303030] font-['Gsans'] mb-[1px]">(1개 ~ 5개)</p>
          </div>
          <p className="text-[16px] text-[#303030] font-['PretendardMedium']">이 자료에 어울리는 키워드를 골라주세요</p>

        </div>
      </div>
    </div>
  );
}