import { connectDB } from "/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google"; 


export const authOptions = {
  providers: [

    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),
    NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),


    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },
      
      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고 
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db('users');
        let user = await db.collection('user').findOne({email : credentials.email})
        if (!user) {
          console.log('해당 이메일은 없음');
          return null
        }
      
        // 비밀번호 검증
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          console.log('비밀번호가 틀림');
          return null;
        }
      
        // 검증이 성공하면 사용자의 정보를 반환
        return { id: user._id, name: user.name, email: user.email };
      }
    })

  ],


  //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 //30일
  },



  callbacks: {
    //4. jwt 만들 때 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    //요거 각 sns마다 변수가 달라서 확인하고 다르게 설정해줘야함
    jwt: async ({ token, user, account,profile }) => {
      if (account && account.provider === "naver") {
        token.id = profile.response.id; // Naver 고유 아이디
        token.name = profile.response.name; // Naver 사용자 이름
        token.picture = profile.response.profile_image; // Naver 사용자 프로필 사진 주소
        token.email = profile.response.email; // Naver 사용자 이메일

      }else if (account && account.provider === "kakao") {

      } else if (account && account.provider === "google") {

      } else if (user) {
        // 자체 로그인 시스템(CredentialsProvider)에 대한 특별한 처리
        token.user = {};
        token.user.name = user.name
        token.user.email = user.email
      }
      console.log(token)

      // 공통 처리
      return token;
    }, 
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user; 
      return session;
    }, 
  },


  adapter: MongoDBAdapter(connectDB),
  secret: 'qwer1234'  
};
export default NextAuth(authOptions); 
