'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link'

function SortAt({board}){
  const pathname = usePathname(); // 현재 경로를 불러오기 위한 hook
  const router = useRouter(); // 페이지 새로고침을 위한 hook
  const params = useSearchParams(); // url 쿼리를 가져오기 위한 hook


  const queryParams = {};
  params.forEach((value, key) => {
    queryParams[key] = value;
  });


  const sortOptions = (()=>{
    switch(board){
      case 'qna':
        return {'조회수':'views', '나도 궁금 순':'nado', '답변 많은 순':'descend_answer', '답변 적은 순':'ascend_answer'};
      default:
        return {'인기순':'popular', '조회수':'views', '추천순':'recommend', '스크랩순':'scrap'};
    }
  })();
  const handleSort = (value) => {
    // sort를 갱신
    queryParams.sort = value;
    // queryParams의 key-value를 queryString으로 변환
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    // 쿼리를 변경하고 페이지를 새로고침
    router.push(`${pathname}?${queryString}`);
  }

  return (
    <div className="flex flex-row text-base">
      {Object.entries(sortOptions).map(([key, value], index, array) => (
        <span key={index} className="flex flex-row font-['Gsans']">
          <button className="" onClick={() => handleSort(value)}>
            {key}
          </button>
          <p className="mx-1 text-gray-400">{index < array.length - 1 ? '|' : ''}</p>
        </span>
      ))}
    </div>
  );
}

function List({posts, board}) {

  if(board === 'qna'){
    return (
      <div>
        {posts.map((post, key) => (
          <Question
            key={key}
            id={post._id}
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
          id={post._id}
          title={post.title}
          author={post.author}
          date={post.date}
          recommend={post.recommend}
          scrap={post.scrap}
          view={post.view}
          comment={post.comment}
          board={board}
        />
      ))}
    </div>
  );
}

function Question({id, title, author, date, nado, view, commen, board}) {
  return(
    <div className="flex flex-row items-center font-['PretendardMedium'] h-10 border-b">
      <div className="flex flex-row items-start w-1/2 ml-2">
        <Popular />
        <Link prefetch={false} className="text-[18px] truncate mr-[3px]" href={`/detail/${id}`}>{title}</Link>
        <Comment comment={comment} />
      </div>
      <button className="text-center w-28">{author}</button>
      <p className="text-center w-32">{date}</p>
      <p className="text-center w-24">{nado}</p>
      <p className="text-center w-24">{view}</p>
    </div>
  )
}

function Post({id, title, author, date, recommend, scrap, view, comment, board}) {
  return (
    <div className="flex flex-row items-center font-['PretendardMedium'] h-10 border-b">
      <div className="flex flex-row items-start w-1/2 ml-2">
        <Popular />
        <Link prefetch={false} className="text-[18px] truncate mr-[3px]" href={`/detail/${id}?board=${board}`}>{title}</Link>
        <Comment comment={comment} />
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

function PageSize(){
  const pathname = usePathname(); // 현재 경로를 불러오기 위한 hook
  const router = useRouter(); // 페이지 새로고침을 위한 hook
  const params = useSearchParams(); // url 쿼리를 가져오기 위한 hook

  // url 쿼리를 dict 객체로 변환
  const queryParams = {};
  params.forEach((value, key) => {
    queryParams[key] = value;
  });

  // 드롭다운 메뉴를 통해 pageSize를 변경하면, url 쿼리를 변경하고 페이지를 새로고침하는 handleChange
  const handleChange = (e) => {
    // pageSize 갱신
    queryParams.pageSize = e.target.value;
    // queryParams의 key-value를 queryString으로 변환
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    // 쿼리를 변경하고 페이지를 새로고침
    router.push(`${pathname}?${queryString}`);
  }
  return(
    <div className="flex justify-end mt-[56.3px]">
      <select className="border font-['PretendardMedium'] font-[15px]" onChange={handleChange}>
        <option value="10">10개씩 보기</option>
        <option value="20">20개씩 보기</option>
        <option value="30">30개씩 보기</option>
      </select>
    </div>
  )
}

function Pagenation({total}){
  const PAGE_GROUP_SIZE =10
  const pathname = usePathname(); // 현재 경로를 불러오기 위한 hook
  const router = useRouter(); // 페이지 새로고침을 위한 hook
  const params = useSearchParams(); // url 쿼리를 가져오기 위한 hook

  // url 쿼리를 dict 객체로 변환
  const queryParams = {};
  params.forEach((value, key) => {
    queryParams[key] = value;
  });
  const currentPage = parseInt(queryParams.page) || 1; // 현재 페이지
  const pageSize = parseInt(queryParams.pageSize) || 10; // 페이지당 게시글 수

  // 버튼을 통해 페이지를 변경하면, url 쿼리를 변경하고 페이지를 새로고침하는 changePage
  const changePage = (newPage) => {
    // page 갱신
    queryParams.page = newPage;
    // queryParams의 key-value를 queryString으로 변환
    const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
    // 쿼리를 변경하고 페이지를 새로고침
    router.push(`${pathname}?${queryString}`);
  };

  // 페이지 버튼을 10개까지만 보여주기 위한 pageNumbers
  const pageNumbers = [];
  for (let i = 0; i <= PAGE_GROUP_SIZE-1; i++) {
    pageNumbers.push(i + 1 + (Math.ceil(currentPage/PAGE_GROUP_SIZE)-1)*PAGE_GROUP_SIZE);
    if (pageNumbers[i] * pageSize >= total) {
      break;
    }
  }

  return (
    <div className="flex flex-row justify-center items-center font-['Gsans'] text-[16px] text-gray gap-x-[34px]">
      {currentPage > PAGE_GROUP_SIZE && (
        <button onClick={() => changePage(Math.ceil((currentPage-PAGE_GROUP_SIZE)/PAGE_GROUP_SIZE)*PAGE_GROUP_SIZE)}>{'<'}</button>
      )}
      {pageNumbers.map(number => (
        <button
          key={number}
          className={currentPage === number ? 'font-bold' : ''}
          onClick={() => changePage(number)}
        >
          {number}
        </button>
      ))}
      {Math.ceil(currentPage/PAGE_GROUP_SIZE)<Math.ceil(total/(PAGE_GROUP_SIZE*pageSize)) && (
        <button onClick={() => changePage(Math.floor((currentPage + PAGE_GROUP_SIZE)/PAGE_GROUP_SIZE)*PAGE_GROUP_SIZE+1)}>{'>'}</button>
      )}
    </div>
  );
}

export { List, SortAt, PageSize, Pagenation }