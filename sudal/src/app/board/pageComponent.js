'use client'

import { useSearchParams } from 'next/navigation';


function Title(){
  const params = useSearchParams();
  const title = params.get('title');
  const pageTitle = (() => {
    switch (title) {
      case 'qna':
        return 'Q&A';
      case 'free':
        return '자유게시판';
      case 'info':
        return '정보게시판';
    }
  })();
  const pageText = (() => {
    switch (title) {
      case 'qna':
        return '과외하며 궁금했던 점들을 묻고 답하는 게시판입니다.';
      case 'free':
        return '우리의 생각을 자유롭게 이야기하는 게시판입니다.';
      case 'info':
        return '과외에 대한 정보를 공유하는 게시판입니다.'; {/*임시*/}
    }
  })();
  return(
    <div className="font-['Gsans']">
      <div className="flex flex-row mb-[4px]">
        <p className="mt-[41px] text-[23px]">{pageTitle}</p>
        <p className="ml-[732px] mt-[41px] text-[13px] text-gray-500">Home &gt; {pageTitle}</p>
      </div>
      <p>{pageText}</p>
    </div>
  )
}

function SortAt(){
  const params = useSearchParams();
  const title = params.get('title');
  const sortOptions = (()=>{
    switch(title){
      case 'qna':
        return ['조회수', '나도 궁금 순', '답변 많은 순', '답변 적은 순'];
      default:
        return ['인기순', '조회수', '추천순', '스크랩순'];
    }
  })();
  return(
    <div className="flex flex-row text-[15px]">
      {sortOptions.map((option, index) => (
        <span key={index} className="flex flex-row font-['Gsans']">
          <button className="">
            {option}
          </button>
          <p className="mx-[4px] text-gray-400">{index < sortOptions.length - 1 ? '|' : ''}</p>
        </span>
      ))}
    </div>
  )
}

function Post() {
  return (
    <div className="flex flex-row items-center justify-between font-['PretendardMedium'] border-b ml-[13px] py-[10px]">
      <div className="flex items-center w-[450px]">
        <Popular />
        <button className="text-left text-black text-[18px] truncate mr-[3px]">
          글 제목123456789123457891234654589451324895689562189562
        </button>
        <Comment comment="4" />
      </div>

      <div className="flex flexitems-center justify-end">
        <button className="w-20 text-center text-[16px] truncate mr-[13px]">작성자</button>
        <p className="w-32 text-center text-[16px] truncate mr-[12px]">2023-12-31</p>
        <p className="w-16 text-center text-[16px] truncate mr-[21px]">10</p>
        <p className="w-16 text-center text-[16px] truncate mr-[20px]">10</p>
        <p className="w-16 text-center text-[16px] truncate mr-[19px]">10</p>
      </div>
    </div>
  );
}


function Popular() {
  return (
    <div className="border rounded-full bg-blue text-white text-[13px] px-[12px] py-[1.5px] mr-2 flex-none">
      인기
    </div>
  );
}

function Comment({ comment }) {
  return (
    <p className="text-[15px] text-gray-400">[{comment}]</p>
  );
}


export {Title, SortAt, Post}