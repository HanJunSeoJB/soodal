import Comment from "./Comment"
import CardLayoutLike from "../../layouts/cardLayout_like"
import DetailLayout from "./DetailLayout"
import Link from "next/link"
import ListButton from "../../layouts/ListButton"

export default async function Detail(props) {

    async function getDetail(id) {
        const result = await fetch(
           ` http://localhost:3000/api/posts/getDetail?id=${id}`,
        {cache: 'no-cache'},
        );
        const data = await result.json();
        return data;
    }
  
    const boardNames = {
        free: '자유게시판',
        qna: 'Q&A',
        info: '정보게시판'
    };
    const detail = await getDetail(props.params.id);
    const dateObj = new Date(detail.updatedAt);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const boardName = boardNames[detail.boardName];

    return (
        <div className="flex flex-row">
            <DetailLayout board = {boardName}>
            </DetailLayout>
            <div className="w-full h-full ml-9">
                {/*가운데 부분 */}
                <div className="flex flex-col w-5/6 h-full">
                    {/*상단 카테고리 */}
                    <div className="flex flex-row justify-between mt-10">
                        <h1 className="font-['Gsans'] text-base">{boardName}</h1>
                        <p className="font-['Gsanslight text-xs']">Home {">"} {boardName}</p>
                    </div>
                    <p className="mt-1 font-['GsansBold'] text-2xl">{detail.title}</p>
                    {/* 세부정보 */}
                    <div className="flex justify-between">
                        <div className="mt-2 flex flex-row text-grey items-center">
                            <p>{detail.author}</p>
                            {/* 막대 바 */}
                            <div className="border-0.25 h-3.5 ml-3 border-darkgrey"></div>
                            <p className="ml-3">{year}. {month}. {day}</p>
                            {/* 막대 바 */}
                            <div className="brder-0.25 h-3.5 ml-3 border-darkgrey"></div>
                            <p className="ml-3">조회 {detail.view}</p>
                        </div>
                        <ListButton _id={props.params.id} board={detail.boardName}/>
                    </div>
                        
                    {/*긴 막대 바 */}
                    <div className="border border-darkgrey mt-5"/>
                    {/* 본문  */}
                    <p className="mt-10 font-['PretendardMedium'] text-base mb-24">{detail.content}</p>
                    {/* 추천  및 스크랩*/}
                    <div className="flex flex-row gap-2.5 justify-center">
                        <CardLayoutLike
                        _id={ detail._id.toString()}
                        type='like'
                        author = {detail.author.toString()} />
                        <CardLayoutLike
                        _id={ detail._id.toString()}
                        author = {detail.author.toString()}
                        type='scrap' />
                    </div>
                    {/* 목록 */}
                    <div className="mt-10 flex justify-center">
                    <Link
                        href={`/board?board=${props.searchParams.board}&page=1&pageSize=10`}
                        className="w-fit h-fit border-2 border-gray rounded-full px-9 mt-7"
                        >목록</Link>
                    </div>
                    {/*긴 막대 바 */}
                    <div className="border border-darkgrey mt-5"/>
                    {/* 댓글 */}
                    <p className="text-xl font-['Gsans'] mt-7">댓글</p>
                    {/* 댓글 입력창 */}
                    <Comment _id={ detail._id.toString()} />
                </div>
            </div>
        </div>        
    )
}