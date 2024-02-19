// store/postsStore.js
import {create} from 'zustand';

const usePostStore = create((set) => ({
  posts: [], // 초기 상태값 설정
  setPosts: (newPosts) => set(() => ({ posts: newPosts })), // 상태 업데이트 함수
}));


export default usePostStore;
