export default function Register(){

    const inputStyle = "w-[338px] h-[44px] border-[0.5px] border-[#707070] focus:border-[#005CA6] focus:border-[2px] focus:outline-none rounded-full py-[13px] pl-[23px] text-16 text-[#A5A5A5] font-['PretendardLight'] placeholder:text-[#A5A5A5]";

    return(
        <div className='flex flex-col items-center w-auto h-[121px] gap-y-[8px]'>
            <form method="POST" action="/api/auth/signupㅈ">
                <p className="mb-4 text-center">회원가입</p>
                <input 
                    type='text' name='username'
                    className = {inputStyle}
                    placeholder='아이디'/>
                <br/>
                <br/>
                <input 
                    type='text' name ='password' 
                    className={inputStyle}
                    placeholder='비밀번호'/>
                <br/>
                <br/>
                <input 
                    type='text' name = 'email' 
                    className={inputStyle}
                    placeholder='[선택] 비밀번호 분실 시 확인용 이메일'/>
                <br/>
                <br/>
                <br/>
                <input 
                    type='text' name = 'name' 
                    className={inputStyle}
                    placeholder='이름'/>
                <br/>
                <br/>
                <input 
                    type='text' name = 'birthdate' 
                    className={inputStyle}
                    placeholder='생년월일 8자리'/>
                <br/>
                {/* <div className="ml-8">
                    <label className="inline-flex items-center">
                        <input type="radio" name="gender" value="male" className="form-radio h-5 w-5 text-gray-600" />
                        <span className="ml-2 text-gray-700">남자</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="radio" name="gender" value="female" className="form-radio h-5 w-5 text-pink-600" />
                        <span className="ml-2 text-gray-700">여자</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="radio" name="gender" value="other" className="form-radio h-5 w-5 text-green-600" />
                        <span className="ml-2 text-gray-700">선택안함</span>
                    </label>
                </div>

                <br/>
                <br/>
                <input 
                    type='tel' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="전화번호"/>
                <br/>
                
                <p className="mb-4 text-center">추가입력 사항</p>
                <input 
                    type='string' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="닉네임"/>
                <br/>
                <input 
                    type='int' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="과외경력"/>
                <br/>
                <input 
                    type='string' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="직업"/>
                <br/>
                <input 
                    type='string' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="가르칠 과목"/>
                <br/>
                <input 
                    type='string' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="학교"/>
                <br/>
                <input 
                    type='string' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="학과"/>
                <br/>
                <input 
                    type='string' name = 'userPass' id='userPass' 
                    className={inputStyle}
                    placeholder="회원가입 일자"/> */}
                <br/>
                <br/>
                <br/>

                <div className='flex flex-col items-center justify-center w-auto h-[84px]'>
                    {/* <button type="submit" className="flex items-center justify-center w-[378px] h-[38px] rounded-md text-15 text-[#FFFFFF] font-['PretendardMedium'] bg-[#005CA6]">
                        인증요청
                    </button> */}
                    <button type="submit" className="flex items-center justify-center w-[378px] h-[38px] mt-auto rounded-md border border-[#005CA6] text-15 text-[#005CA6] font-['PretendardMedium'] bg-[#FFFFFF]">
                        회원가입
                    </button> 
                </div>
          
            </form>
        </div>
    )

}