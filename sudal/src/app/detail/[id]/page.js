import { ObjectId } from "mongodb"
import { connectDB } from "../../../../util/database"
import CardLayoutLike from "@/app/layouts/cardLayout_like"
import Link from "next/link"

export default async function Detail(props) {
    const db = (await connectDB).db('posts')
    const result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    const dateObj = new Date(result.updatedAt)
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth()+1; // 월은 0부터 시작하므로 1을 더해줍니다.
    const day = dateObj.getDate();

    return (
        <div className="w-full h-full">
            {/*가운데 부분 */}
            <div className="flex flex-col w-5/6 h-full">
                {/*상단 카테고리 */}
                <div className="flex flex-row justify-between mt-10">
                    <h1 className="font-['Gsans'] text-base">자유게시판</h1>
                    <p className="font-['Gsanslight text-xs']">Home {">"} 자유게시판</p>
                </div>
                <p className="mt-1 font-['GsansBold'] text-2xl">{result.title}</p>
                {/* 세부정보 */}
                <div className="mt-2 flex flex-row text-grey items-center">
                    <p>{result.author}</p>
                    {/* 막대 바 */}
                    <div className="border-0.25 h-3.5 ml-3 border-darkgrey"></div>
                    <p className="ml-3">{year}. {month}. {day}</p>
                    {/* 막대 바 */}
                    <div className="border-0.25 h-3.5 ml-3 border-darkgrey"></div>
                    <p className="ml-3">조회 {result.view}</p>
                    {/* 막대 바 */}
                    <div className="border-0.25 h-3.5 ml-3 border-darkgrey"></div>
                    <p className="ml-3">스크랩 2</p>
                </div>
                {/*긴 막대 바 */}
                <div className="border border-darkgrey mt-5"/>
                {/* 본문  */}
                <p className="mt-10 font-['PretendardMedium'] text-base mb-24">{result.content}</p>
                {/* 추천  및 스크랩*/}
                <div className="flex flex-row gap-2.5">
                    <CardLayoutLike/>
                    <CardLayoutLike/>
                </div>
                {/* 목록 */}
                <div className="mt-10">
                    <Link href='/board' className="w-fit h-fit border-2 border-gray rounded-full px-9 mt-7">목록</Link>
                </div>
                {/*긴 막대 바 */}
                <div className="border border-darkgrey mt-5"/>
                {/* 댓글 */}
                <p className="text-xl font-['Gsans'] mt-7">댓글</p>
                {/* 댓글 입력창 */}
                <div className="w-full h-32 border border-grey mt-3 flex flex-col justify-center shadow-lg">
                    <div className="flex flex-row items-center justify-center">
                        <textarea className="w-full min-h-20 max-h-20 border border-grey ml-2.5" placeholder="댓글을 입력해주세요."></textarea>
                        <button className="w-fit h-fit border-2 border-gray px-4 py-8 mx-2.5">등록</button>
                    </div>
                </div>
            </div>
        </div>
    )
}