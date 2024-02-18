import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if(!request.cookies.has('next-auth.session-token'))
        return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/posting/:path*',
}
