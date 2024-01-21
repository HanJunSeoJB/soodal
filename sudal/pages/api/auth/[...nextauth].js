//pages/api/auth/[...nextauth].js
//pages/api/auth/[...nextauth].js
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
      allowDangerousEmailAccountLinking: true,
    }),
    NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_SECRET,
        allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        allowDangerousEmailAccountLinking: true,
    }),

    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },
      
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

  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);
