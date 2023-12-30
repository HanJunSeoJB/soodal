'use client'

import { useSearchParams } from 'next/navigation';
import { FreePage, QnAPage, InfoPage } from './boardPage';

export default function BoardPage(){
  const params = useSearchParams();
  const title = params.get('title');

  const pageComponents = {
    'free': FreePage,
    'info': InfoPage,
    'qna': QnAPage
  };

  // 선택된 타이틀에 해당하는 컴포넌트를 가져옴
  const SelectedPage = pageComponents[title];

  // 선택된 페이지가 없는 경우를 처리
  if (!SelectedPage) {
    return <div>페이지를 찾을 수 없습니다.</div>;
  }

  // 선택된 페이지 렌더링
  return (
    <div>
      <SelectedPage />
    </div>
  );
}