import Image from 'next/image'
import Comment from "./comment"
import Sorting from "./sorting"
import Pagenation from "./pagenation"

export default function CommentPage() {
  return (
    <div className='flex flex-col mt-[70px] ml-[69px]'>
      <Sorting/>
      <div>
        {/*comment반복해서 생성*/}
        <Pagenation/>
      </div>
    </div>
  )
}