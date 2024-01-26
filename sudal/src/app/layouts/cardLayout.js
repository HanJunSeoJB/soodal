import Image from "next/image"

export default function CardLayout({img, title, rating}) {
    return (
        <div className="w-1/5 flex flex-col shrink-0 mr-5">
            {/*일러스트 */}
            <Image src={img} />
            {/*제목 */}
            <p className="mt-7">
            [2015 개정] 중3 영어 천재 <br/>
            (김사월) 02과 <br/>
            (2022) <br/>
            </p>
            {/*별점*/}
            <div className="flex flex-row shrink-0 font-['GsansBold'] text-base mt-3.5">
               <Star/>
               <p className="ml-2">4.6</p>
               <p>(79)</p>
            </div>
            {/*유,무료 구분 */}
            <div className="w-1/5 rounded-lg bg-lightgrey h-fit flex justify-center mt-3.5">
                <p className="font-['Gsans] text-darkblue text-base">무료</p>
            </div>
        </div>
    )
}

function Star() {
    return (
        <div>
            <svg className="w-4 h-4 text-yellow-300 ms-1" fill="#1E4F85" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
    )
}
