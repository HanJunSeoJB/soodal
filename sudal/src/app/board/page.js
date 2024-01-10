import { SortAt, Title,  Label, List } from "./pageComponent";

export default async function BoardPage(props){

  const query = props.searchParams

  const board = query.board
  delete query.board

  const queryString = Object.entries(query)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  const posts = await fetch(`http://localhost:3000/api/posts/get`).then((res) => res.json());
  console.log(posts);

  return(
    <div className="ml-9">
      <Title/>
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
        <SortAt/>
        <button className="border rounded-full text-gray-500 text-[17px] font-['Gsans'] h-[23px] px-[28px]">
          글쓰기
        </button>
      </div>

      <Label/>
      {/* <PostList/> */}
      {/* <List board={board} posts={posts}/> */}
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