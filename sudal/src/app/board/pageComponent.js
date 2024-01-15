'use client'

import { useSearchParams } from 'next/navigation';

// async function getPosts() {
//   const params = useSearchParams();
//   const queryString = Array.from(params.entries())
//     .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
//     .join('&');

//   const res = await fetch(`http://localhost:3000/api/posts/get?${queryString}`,{
//     cache: 'no-cache',
//   });
//   const data = await res.json();
//   return data;
// }

function Title(){
  const params = useSearchParams();
  const board = params.get('board');
  const pageTitle = (() => {
    switch (board) {
      case 'qna':
        return 'Q&A';
      case 'free':
        return '자유게시판';
      case 'info':
        return '정보게시판';
    }
  })();
  const pageText = (() => {
    switch (board) {
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
      <div className="flex flex-row justify-between mt-10 h-auto">
        <p className="text-2xl h-auto">{pageTitle}</p>
        <p className="text-sm text-gray-500">Home &gt; {pageTitle}</p>
      </div>
      <p>{pageText}</p>
    </div>
  )
}

function SortAt(){
  const params = useSearchParams();
  const board = params.get('board');
  const sortOptions = (()=>{
    switch(board){
      case 'qna':
        return ['조회수', '나도 궁금 순', '답변 많은 순', '답변 적은 순'];
      default:
        return ['인기순', '조회수', '추천순', '스크랩순'];
    }
  })();
  return(
    <div className="flex flex-row text-base">
      {sortOptions.map((option, index) => (
        <span key={index} className="flex flex-row font-['Gsans']">
          <button className="">
            {option}
          </button>
          <p className="mx-1 text-gray-400">{index < sortOptions.length - 1 ? '|' : ''}</p>
        </span>
      ))}
    </div>
  )
}

function Label(){
  const params = useSearchParams();
  const board = params.get('board');
  
  if(board === 'qna'){
    return(
      <div className="flex flex-row items-center bg-gray-300 font-['PretendardMedium'] mt-3 text-gray-600 h-10 w-auto">
        <p className="text-center w-1/2">제목</p>
        <p className="text-center w-28">작성자</p>
        <p className="text-center w-32">작성일</p>
        <p className="text-center w-24">나도</p>
        <p className="text-center w-24">조회</p>
      </div>
    )
  }
  else{
    return(
      <div className="flex flex-row items-center bg-gray-300 font-['PretendardMedium'] mt-3 text-gray-600 h-10 w-auto">
        <p className="text-center w-1/2">제목</p>
        <p className="text-center w-28">작성자</p>
        <p className="text-center w-32">작성일</p>
        <p className="text-center w-20">추천</p>
        <p className="text-center w-20">스크랩</p>
        <p className="text-center w-20">조회</p>
      </div>
    )
  }
}

function List({posts}) {
  const params = useSearchParams();
  const board = params.get('board');

  if(board === 'qna'){
    return (
      <div>
        {posts.map((post, key) => (
          <Question
            key={key}
            title={post.title}
            author={post.author}
            date={post.date}
            nado={post.nado}
            view={post.view}
            comment={post.comment}
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      {posts.map((post, key) => (
        <Post
          key={key}
          title={post.title}
          author={post.author}
          date={post.date}
          recommend={post.recommend}
          scrap={post.scrap}
          view={post.view}
          comment={post.comment}
        />
      ))}
    </div>
  );
}

function Question({title, author, date, nado, view, comment}) {
  return(
    <div className="flex flex-row items-center font-['PretendardMedium'] h-10 border-b">
      <div className="flex flex-row items-start w-1/2">
        <Popular />
        <button className="text-[18px] truncate mr-[3px]">
          {title}
        </button>
        <Comment comment={comment} />
      </div>
      <button className="text-center w-28">{author}</button>
      <p className="text-center w-32">{date}</p>
      <p className="text-center w-24">{nado}</p>
      <p className="text-center w-24">{view}</p>
    </div>
  )
}

function Post({title, author, date, recommend, scrap, view, comment}) {
  return (
    <div className="flex flex-row items-center font-['PretendardMedium'] h-10 border-b">
      <div className="flex flex-row items-start w-1/2">
        <Popular />
        <button className="text-[18px] truncate mr-[3px]">
          {title}
        </button>
        {/* <Comment comment={comment} /> */}
      </div>
      <button className="text-center w-28 text-center text-[16px] truncate">{author}</button>
      <p className="text-center w-32 text-center text-[16px] truncate">{date}</p>
      <p className="text-center w-20 text-center text-[16px] truncate">{recommend}</p>
      <p className="text-center w-20 text-center text-[16px] truncate">{scrap}</p>
      <p className="text-center w-20 text-center text-[16px] truncate">{view}</p>
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

export {Title, SortAt, Label, List}