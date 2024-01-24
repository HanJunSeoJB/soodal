import Image from 'next/image'
import MaterialTag from "./materialTag";
import MaterialInfo from "./materailInfo";
import ReviewTag from "./reviewTag";

export default async function TagInfo() {

  return (
    <div className='flex flex-col mt-[72px] ml-[69px]'>
      <MaterialTag/>
      <MaterialInfo/>
      <ReviewTag/>
    </div>
  )
}