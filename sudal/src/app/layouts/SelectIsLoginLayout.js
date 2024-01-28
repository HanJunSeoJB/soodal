'use client'
import LoginLayout from './LoginLayout'
import UserLayout from './UserLayout'

export default function IsLoginLayout({session}){
    if (session) {
        // 세션이 있는 경우 UserLayout 렌더링
        return <UserLayout name={session.user.name} image={session.user.image} />;
      } else {
        // 세션이 없는 경우 LoginLayout 렌더링
        return <LoginLayout />;
      }
}