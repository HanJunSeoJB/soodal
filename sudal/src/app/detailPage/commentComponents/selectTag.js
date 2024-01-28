import React from 'react';

export default function SelectTag({ clickModal }) {
  const handleCloseModal = () => {
    clickModal();
  };

  return (
      <div className="absolute top-0 left-0 w-[200px] h-[100px] z-100 rounded-[19px] border border-[#D5D5D5] py-[33px] px-[40px] shadow-md">
        <p>hello world!</p>
        <button onClick={handleCloseModal}>X</button>
      </div>
  );
}