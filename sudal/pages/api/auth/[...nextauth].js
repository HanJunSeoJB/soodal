import NextAuth from "next-auth"
import connectDB from "../../../util/database"
import {MongoDBAdapter} from "@next-auth/mongodb-adapter"
import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"



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

  ],

  
  adapter : MongoDBAdapter(connectDB)
}

export default NextAuth(authOptions)
