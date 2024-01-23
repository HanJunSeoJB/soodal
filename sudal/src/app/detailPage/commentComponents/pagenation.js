'use client'
import React, {useState} from 'react';
import Comment from "./comment"
import WriteForm from "./writeForm"

export default function Pagenation() {
  const commentsPerPage = 3;
  //임의로 넣어놓은 데이터값입니다
  const [comments, setComments] = useState([
    { id: 1, content: '댓글 1 내용' },
    { id: 2, content: '댓글 2 내용' },
    { id: 3, content: '댓글 3 내용' },
    { id: 4, content: '댓글 4 내용' },
    { id: 5, content: '댓글 5 내용' },
    { id: 6, content: '댓글 6 내용' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 표시할 댓글들 계산
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='relative flex flex-col'>
      {/*댓글부분*/}
      <div>
        {currentComments.map((comment) => (
        <Comment content={comment.content} />
        ))}
      </div>
      {/*버튼들*/}
      <div className='flex justify-end mt-[12px]'>
        <button className="rounded-full border border-[#444444] w-auto px-[12px] py-[6px] mr-[10px] text-15 text-[#444444] font-[PretendardMedium]">
          목록으로
        </button>
        <button className="rounded-full border border-[#444444] w-auto px-[21px] py-[6px] text-15 text-[#444444] font-[PretendardMedium]">
          리뷰 작성하기
        </button>
      </div>
      {/*페이지네이션 버튼*/}
      <div className="flex justify-center gap-x-[34px] text-[16px] text-[#444444] font-['Gsans'] mt-[19px]">
        <button 
        className="mr-[8px]"
        onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        > &lt; 
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${currentPage === index + 1 ? 'text-[#005CA6] font-bold' : 'text-[#444444] font-normal'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button 
        className="ml-[8px]"
        onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastComment >= comments.length}
        > &gt; 
        </button>
      </div>
      <WriteForm/>
    </div>
  )
}