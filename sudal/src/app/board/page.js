import {List, SortAt} from "./pageComponent";

async function getPosts({queryString}) {
  const res = await fetch(`http://localhost:3000/api/posts/get?${queryString}`,{
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
}

export default async function BoardPage(props){
  const query = props.searchParams
  const board = query['board'];

  const queryString = Object.entries(query)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  const posts = await getPosts({queryString});

  return(
    <div className="ml-9">
      <Title board={board}/>
      <div className="flex flex-row mt-7 font-['Gsans'] h-7 text-sm">
        <select className="border pl-4 pr-9 w-auto">
          <option>제목</option>
          <option>내용</option>
          <option>작성자</option>
        </select>
        <input className="border ml-1.5 w-1/3 px-1.5"></input>
        <button className="border bg-gray-700 text-white w-1/12 ml-1.5">검색</button>
      </div>

      <div className="flex justify-between mt-[13px] w-[964px]">
        <SortAt board={board}/>
        <button className="border rounded-full text-gray-500 text-[17px] font-['Gsans'] h-[23px] px-[28px]">
          글쓰기
        </button>
      </div>

      <Label board={board}/>
      <List posts={posts} board={board}/>
      <div className="flex justify-end mt-[56.3px]">
        <select className="border font-['PretendardMedium'] font-[15px]">
          <option>10개씩 보기</option>
          <option>20개씩 보기</option>
          <option>30개씩 보기</option>
        </select>
      </div>
      <div className="flex flex-row justify-center items-center font-['Gsans'] text-[16px] text-gray gap-x-[34px]">
          <button>{'<'}</button>
          <button>{'1'}</button>
          <button>{'2'}</button>
          <button>{'3'}</button>
          <button>{'4'}</button>
          <button>{'5'}</button>
          <button>{'>'}</button>
      </div>
    </div>
  )
}

function Title({board}){
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

function Label({board}){
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