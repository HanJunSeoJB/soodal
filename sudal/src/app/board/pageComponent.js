'use client'

function SortAt({board}){
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

function List({posts, board}) {
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

export { List, SortAt }