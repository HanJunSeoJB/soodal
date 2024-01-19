'use client'
import Image from 'next/image'
import logoBlue from '../../../public/images/logoBlue.png'
import logoGoogle from '../../../public/images/logoGoogle.png'
import logoKakao from '../../../public/images/logoKakao.png'
import logoNaver from '../../../public/images/logoNaver.png'
import {useSession, signIn, signOut} from 'next-auth/react'

export default function Login() {

    const {data: session,status} = useSession();


    if (status === "loading") {
        return <p>로딩 중...</p>;
      }
      
      if(!session) {
        return(
            // 전체 viewport margin 설정
            <div className='mx-6 mt-8 mb-24'>
            <div className='flex flex-col items-center gap-y-[32px]'>
                {/*로그인 폼*/}
                <p className='text-2xl'>로그인</p>
                <div className = 'w-auto h-[36px]'>
                    <Image src={logoBlue} className='w-[120px] h-[36px]'></Image>
                </div>

                {/*아이디 비밀번호 입력 폼*/}
                <div className = 'flex flex-col items-center w-auto h-[121px] gap-y-[8px]'>
                    <input 
                    type='text' name='userId' id='userId' 
                    className="w-[338px] h-[44px] 
                    border-[0.5px] border-[#707070] focus:border-[#005CA6] focus:border-[2px] focus:outline-none rounded-full py-[13px] pl-[23px] 
                    text-16 text-[#A5A5A5] font-['PretendardLight'] placeholder:text-[#A5A5A5]" 
                    placeholder='아이디를 입력해 주세요'/>
                    <input 
                    type='password' name = 'userPass' id='userPass' 
                    className="w-[338px] h-[44px] 
                    border-[0.5px] border-[#707070] focus:border-[#005CA6] focus:border-[2px] focus:outline-none rounded-full py-[13px] pl-[23px] 
                    text-16 text-[#A5A5A5] font-['PretendardLight'] placeholder:text-[#A5A5A5]" 
                    placeholder='비밀번호를 입력해 주세요'/>

                    {/*개인정보 찾기 버튼*/}
                    <div className='flex flex-row items-center justify-center w-[319px] h-[18px]'>
                        <div className='flex'>
                            <input type='checkbox' id='recall' name='recall' value="recall" className='form-radio text-[#1E4F85]'/>
                            <label htmlFor='recall' className="ml-[3px] text-14 text-[#3E3E3E] font-['PretendardLight']">아이디 기억하기</label>
                        </div>
                        <div className='flex flex-row items-center justify-center w-[170px] h-[18px] ml-auto'>
                            <a href="#" className="text-[#878787] text-13 font-['PretendardLight'] ">아이디 찾기</a>
                            <p className="text-[#878787] text-13 ml-auto font-['PretendardLight']">|</p>
                            <a href="#" className="text-[#878787] text-13 ml-auto font-['PretendardLight'] ">비밀번호 찾기</a>
                        </div>
                    </div>
                </div>

                {/*소셜로그인 버튼*/}
                <div className='flex flex-col items-center justify-center w-auto h-[130px]'>
                <button className="flex items-center justify-center w-[378px] h-[38px] rounded-md text-15 text-[#371C1D] font-['PretendardMedium'] bg-[#F9E000]" 
                onClick={() => { console.log('Signing in with Kakao'); signIn('kakao'); }}>
                        <Image src={logoKakao} className='w-auto h-auto mr-[8px]'/>
                        카카오톡으로 로그인
                    </button>
                    <button className="flex items-center justify-center w-[378px] h-[38px] mt-auto rounded-md text-15 text-[#FFFFFF] font-['PretendardMedium'] bg-[#03CF5D]" 
                    onClick={() => { signIn("naver")}}>
                        <Image src={logoNaver} className='w-auto h-auto mr-[8px]'/>
                        네이버로 로그인
                    </button>
                    <button className="flex items-center justify-center w-[378px] h-[38px] mt-auto rounded-md text-15 text-[#FFFFFF] font-['PretendardMedium'] bg-[#EA4335]">
                        <Image src={logoGoogle} className='w-auto h-auto mr-[8px]'/>
                        구글로 로그인
                    </button>   
                </div>

                {/*일반로그인 버튼*/}
                <div className='flex flex-col items-center justify-center w-auto h-[84px]'>
                    <button className="flex items-center justify-center w-[378px] h-[38px] rounded-md text-15 text-[#FFFFFF] font-['PretendardMedium'] bg-[#005CA6]">
                        로그인
                    </button>
                    <button className="flex items-center justify-center w-[378px] h-[38px] mt-auto rounded-md border border-[#005CA6] text-15 text-[#005CA6] font-['PretendardMedium'] bg-[#FFFFFF]">
                        회원가입
                    </button> 
                </div>
            </div>
            </div>
            )
      }
    return (
        <div>
            <p>로그인 되었습니다.</p>
            <button onClick={() => signOut()}>로그아웃</button>
        </div>
    )
        
}