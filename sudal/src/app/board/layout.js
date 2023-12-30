'use client'

import { useSearchParams } from 'next/navigation';
import { FreeLayout, QnALayout, InfoLayout } from './boardLayout';

export default function BoardLayout(){
  const params = useSearchParams();
  const title = params.get('title');

  const layoutComponents = {
    'free': FreeLayout,
    'info': InfoLayout,
    'qna': QnALayout
  };

  // 선택된 타이틀에 해당하는 컴포넌트를 가져옴
  const SelectedLayout = layoutComponents[title];

  // 선택된 페이지가 없는 경우를 처리
  if (!SelectedLayout) {
    return <div>페이지를 찾을 수 없습니다.</div>;
  }

  // 선택된 페이지 렌더링
  return (
    <div>
      <SelectedLayout />
    </div>
  );
}