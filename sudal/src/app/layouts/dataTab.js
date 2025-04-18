import Image from "next/image"
import 이미지 from '../../../public/images/recent_materials.png'
import 예시 from '../../../public/images/example.png'
import CardLayout from "./cardLayout";

export default function DataTab() {

    const datas = {
        images : [예시, 예시, 예시, 예시],
        titles : ["[2015 개정] 중3 영어 천재 (김사월) 02과 (2022)"],
        ratings : [4.7],
        peoples : [79]
    }
// -> 여기 db 자료 넣으면 딱 그냥 아주 그냥 완벽


    return (
        <div className="flex flex-col items-center">
            <div className="w-3/5 flex flex-col items-center">
                <div className="w-full h-fit justify-start">
                    {/*가장 신선한 */}
                    <div className="font-['Gsans'] flex flex-row justify-start text-xl">
                        <p>가장</p>
                        <p className="ml-1 text-fontblue">신선한</p>
                    </div>
                    {/*최신자료 */}
                    <div className="flex flex-row mb-7">
                        <p className="font-['GsansBold'] text-3xl mr-1">최신자료</p>
                        <Image src={이미지} className="w-auto h-auto"/>
                    </div>
                </div>
                {/*자료 컨테이너*/}
                <div className="w-full flex flex-col">
                    <div className="rounded-xl w-full overflow-hidden">
                        {/*일러스트*/}
                        <div className="flex">
                        {/* {[...Array(5)].map((_, index) => (
                            <p key={index}>Paragraph {index + 1}</p>
                        ))}
                             */}
                            <CardLayout img={예시} title={datas.titles[0]} rating={datas.ratings[0]} people={datas.peoples[0]}/>
                            <CardLayout img={예시} title={datas.titles[0]} rating={datas.ratings[0]} people={datas.peoples[0]}/>
                            <CardLayout img={예시} title={datas.titles[0]} rating={datas.ratings[0]} people={datas.peoples[0]}/>
                            <CardLayout img={예시} title={datas.titles[0]} rating={datas.ratings[0]} people={datas.peoples[0]}/>
                            <CardLayout img={예시} title={datas.titles[0]} rating={datas.ratings[0]} people={datas.peoples[0]}/>
                            <CardLayout img={예시} title={datas.titles[0]} rating={datas.ratings[0]} people={datas.peoples[0]}/>
                            <CardLayout img={예시} title={datas.titles[0]} rating={datas.ratings[0]} people={datas.peoples[0]}/>
                        </div>
                        {/*설명 칸 */}
                        <div className="flex flex-row">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}