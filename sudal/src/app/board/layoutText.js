'use client'

import { useSearchParams } from 'next/navigation';

export default function LayoutText(){
  const params = useSearchParams();
  const title = params.get('title');
  return(
    <div>
      <p className="text-[20px]">
      {(() => {
            switch (title) {
              case 'qna':
                return 'Q&A';
              case 'free':
                return '자유게시판';
              case 'info':
                return '정보게시판';
            }
        })()}
      </p>
      <div className="border-b border-black w-[171px] mt-[11.5px] mb-[17.5px]"/>
      <button>
      {(() => {
            switch (title) {
              case 'qna':
                return '· Q&A';
              case 'free':
                return '· 자유게시판';
              case 'info':
                return '· 정보게시판';
            }
        })()}</button><br/>
    </div>
  )
}