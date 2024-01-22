import { ObjectId } from "mongodb"
import { connectDB } from "../../../../util/database"
import Comment from "./Comment"
import CardLayoutLike from "../../layouts/cardLayout_like"
import DetailLayout from "./DetailLayout"
import Link from "next/link"
import ListButton from "../../layouts/ListButton"


export default async function Detail(props) {
    fetch(`http://localhost:3000/api/posts/view?id=${props.params.id}`)

    const db = (await connectDB).db('posts')
    const result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})
    const boardNames = {
        free: '자유게시판',
        qna: 'Q&A',
        info: '정보게시판'
    };
    let boardName = boardNames[props.searchParams.board];
    
    const dateObj = new Date(result.updatedAt)
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth()+1; // 월은 0부터 시작하므로 1을 더해줍니다.
    const day = dateObj.getDate();
    
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
                    <p className="mt-1 font-['GsansBold'] text-2xl">{result.title}</p>
                    {/* 세부정보 */}
                    <div className="flex justify-between">
                        <div className="mt-2 flex flex-row text-grey items-center">
                            <p>{result.author}</p>
                            {/* 막대 바 */}
                            <div className="border-0.25 h-3.5 ml-3 border-darkgrey"></div>
                            <p className="ml-3">{year}. {month}. {day}</p>
                            {/* 막대 바 */}
                            <div className="border-0.25 h-3.5 ml-3 border-darkgrey"></div>
                            <p className="ml-3">조회 {result.view}</p>
                        </div>
                        <ListButton/>
                    </div>
                        
                    {/*긴 막대 바 */}
                    <div className="border border-darkgrey mt-5"/>
                    {/* 본문  */}
                    <p className="mt-10 font-['PretendardMedium'] text-base mb-24">{result.content}</p>
                    {/* 추천  및 스크랩*/}
                    <div className="flex flex-row gap-2.5 justify-center">
                        <CardLayoutLike
                        _id={ result._id.toString()}
                        type='like'
                        author = {result.author.toString()} />
                        <CardLayoutLike
                        _id={ result._id.toString()}
                        author = {result.author.toString()}
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
                    <Comment _id={ result._id.toString()} />
                </div>
            </div>
        </div>        
    )
}