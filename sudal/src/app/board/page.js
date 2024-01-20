import { List, SortAt, PageSize, Pagenation } from "./pageComponent";
import Link from 'next/link';

// db에서 posts를 가져오는 함수
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

  // query의 key-value를 queryString으로 변환
  const queryString = Object.entries(query)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  // queryString을 이용해 db에서 posts를 가져옴
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
          <Link href={`/posting?board=${board}`} className="border rounded-full
            text-gray-500 text-[17px] font-['Gsans']
            h-[23px] px-[28px]">글쓰기</Link>
      </div>

      <Label board={board}/>
      <List posts={posts.posts} board={board}/>
      <PageSize/>
      <Pagenation total={posts.total}/>
    </div>
  )
}

function Title({board}){
  // board에 따라 title과 text가 달라짐
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
  // board에 따라 게시글 목록에서 보여줄 정보 Label이 달라짐
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