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
  

  jwt : {
    maxAge: 60*60,
  },
  callbacks: {
    // JWT 사용할 때마다 실행됨, return 오른쪽에 뭐 적으면 그걸 JWT로 만들어서 유저에게 보내줌
    async jwt({ token, account, user,profile }) {

      // console.log('naver profile:', profile);

      if (account && account.provider === "naver"){
        user.id = profile.response.id;
        user.name = profile.response.name;   
        user.email = profile.response.email;

        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.username = user.name;
        token.userId = user.id;
      }
      console.log('account 토큰 :' , token.accessToken)
      console.log('refresh 토큰 :' , token.refreshToken)
      console.log('user', user);

      
      
      fetch('http://localhost:3000/api/auth/userInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessToken: account.access_token, // 이 값이 정의되었는지 확인
          username: user.name, // 이 값이 정의되었는지 확인
          userId: user.id, // 이 값이 정의되었는지 확인
        }),
      })
      return token;
    },

    //getServerSession 실행시 토큰에 있던 어떤 정보 뽑아서 컴포넌트로 보내줄지 결정가능 
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.username = token.username;
      session.user.userId = token.userId;
      console.log("session : ",session)
      return session;
    },
  },
  
  secret : 'password1234',
};
export default NextAuth(authOptions);



