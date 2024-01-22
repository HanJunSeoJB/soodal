import './globals.css'
import Image from 'next/image'
import logoBlue from '../../public/images/logoBlue.png'
import logoWhite from '../../public/images/logoWhite.png'
import kakao from '../../public/images/footerKakao.png'
import cafe from '../../public/images/footerCafe.png'
import insta from '../../public/images/footerInstagram.png'
import Link from 'next/link'
import DropdownMenu from './layouts/dropdown'
import FloatingButton from './layouts/floatingbutton'
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import SelectIsLogin from './layouts/SelectIsLoginLayout'

export const metadata = {
  title: '수집의달인',
  description: '수집의달인',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)

  return (
    <html lang="ko">
      <body>
        <div className='w-full h-3436 relative'>
          <FloatingButton/>
          <div className=' overflow-y-auto min-h-screen'>
            {/*헤더 전체 */}
            <div className='w-auto h-140'>
              {/*로그인 바 */}
              <div className='h-40 bg-lightgrey flex flex-row justify-center mb-5 border-2'>
                <div className='w-3/6'>
                  <p className="text-blue font-['Gsans'] text-sm mt-2">NOTICE</p>
                  {/*여기에 공지사항 세부내용 입력 */}
                  </div>
                  <SelectIsLogin session={session}/>
              </div>
              {/*네비게이션 바 */}
              <div id='header' className='w-full h-auto flex items-center flex-col shadow-md pb-4'>
                <div className='w-5/6 flex flex-row items-center justify-center'>
                  {/*로고 이미지*/}
                  <Link legacyBehavior href="/">
                    <a className='mr-10'>
                      <Image src={logoBlue} alt="로고" className='w-auto h-auto' />
                    </a>
                  </Link>
                  {/*메뉴 바*/}
                  <div id='nav' className='w-full h-30px'>
                    {/*카테고리들 */}
                    <ul className="w-full flex flex-row font-['Gsans'] text-xl">
                      <DropdownMenu/>
                      <li className='w-fit mr-32 hover:text-[#005CA6]'> <Link href='/board?board=free&page=1&pageSize=10'>자유게시판</Link> </li>
                      <li className='w-fit mr-32 hover:text-[#005CA6]'> <Link href='/board?board=info&page=1&pageSize=10'>정보게시판</Link> </li>
                      <li className='w-fit mr-32 hover:text-[#005CA6]'> <Link href='/board?board=qna&page=1&pageSize=10'>Q&A</Link> </li>
                      <li className='w-fit ml-5 hover:text-[#005CA6]'> <Link href='/mypage'>마이페이지</Link> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
          {/*하단 바*/}
          <div className='w-full h-216 absolute bottom-0 bg-grey flex flex-nowrap gap-54 justify-center items-center'>
              {/*로고 이미지 */}
              <Image src={logoWhite} alt='logo' className='w-auto h-auto'></Image>
              <div className='w-1000 h-138 flex flex-row'>
                {/*하단 설명 */}
                <div className="font-['Gsans'] text-17, text-white flex flex-col gap-y-22">
                  <div className='flex'>
                    <p>SOODAL</p>
                    <p className='ml-auto'>개인정보처리방침</p>
                    <p className='ml-auto'>이용약관</p>
                    <p className='ml-auto'>고객센터</p>
                    <p className='ml-auto'>광고/제휴문의</p>
                  </div>
                  <div className='flex flex-col'>
                    <p>양말벗은 대학생들 I 대표자 전소영 I 사업자등록번호 000-00-00000 I 대표전화 010-7210-1430</p>
                    <p>전북 전주시 덕진구 백제대로 567 뉴실크로드센터(1-33동) 303호 I 이메일 soodal1430@naver.com</p>
                  </div>
                  <div>
                    <p className='text-14'>Copyright © SOODAL All rights reserved.</p>
                  </div>
                </div>
                {/*하단 SNS 아이콘 */}
                <div className='flex w-105 h-26 mt-auto ml-auto'>
                  <Image src={kakao} alt='kakao'></Image>
                  <Image src={cafe} alt='cafe' className='ml-auto'></Image>
                  <Image src={insta} alt='insta' className='ml-auto'></Image>
                </div>
              </div>
          </div>
        </div>
      </body>
    </html>
  )
}