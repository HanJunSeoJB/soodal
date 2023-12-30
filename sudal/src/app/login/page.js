import Image from 'next/image'
import logoBlue from '../../../public/images/logoBlue.png'


export default function Login() {
    return (
        // 전체 viewport margin 설정
        <div className="mx-6 mt-8 mb-24">
            <div className="flex flex-col items-center font-['Gsans']">
                {/*로그인 폼*/}
                <p className="text-2xl mb-[32px]">로그인</p>
                <div className = 'w-auto h-[36px] mb-[32px]'>
                    <Image src={logoBlue} className='w-[120px] h-[36px]'></Image>
                </div>
                {/*아이디 비밀번호 입력 폼*/}
                <div className = 'w-auto h-[121px] mb-[32px] text-[16px]'>
                <input 
                type="text" name = "userId" id="userId" 
                className="w-[338px] h-[44px] border-[0.5px] rounded-full py-[13px] pl-[23px] text-[#A5A5A5] placeholder:text-[#A5A5A5]" placeholder="아이디를 입력해 주세요"/>
                </div>
            </div>
        </div>
    )
}
