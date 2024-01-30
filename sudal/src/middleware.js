import { NextResponse } from 'next/server';
import {useSession} from 'next-auth/react'


export async function middleware(request) {
  console.log(request)

  if (request.nextUrl.pathname.startsWith('/post')) {
    console.log('세션', session)
    if (session == null) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
  }
} 