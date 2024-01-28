'use client'
import {useState, useEffect} from 'react';
import Image from 'next/image'
import styles from "./heartToggle.module.css";
import emptyHeart from 'public/images/emptyHeart.png';
import fullHeart from 'public/images/fullHeart.png';

export default function HeartToggle() {
  // isHeartFilled변수로 DB에서 좋아요가 눌렸는지, 아닌지 확인하면 될것같습니다.
  // 눌렸으면 true, 안눌렸으면 false값을 가집니다.
  // 레퍼런스 찾아보니 useEffect와 HeartToggle부분에 DB관련된 요소들을 넣으면 될 것 같습니다(확실하진 않습니다!!!).
  // useEffect 주석부분은 axios쓰는 레퍼런스에서 가져온 예시입니다.
  // https://cotak.tistory.com/113
  const [isHeartFilled, setHeartFilled] = useState(0);

  /*
  useEffect(async () => {
    const fetchData = async () => {
      const res = await axios.get(...)
      if (res.data.type === 'liked') setLike(true)
    }
      fetchData()
    }, []);
  */


  const HeartToggle = () => {
    setHeartFilled(!isHeartFilled);
  }

  return (
    <button 
    id='heart' 
    className={`flex items-center justify-center h-[30px] w-[65px] rounded-full border border-[#707070] text-[15px] text-[#444444] font-[PretendardMedium] ${styles.heartShrink}`}
    onClick={HeartToggle}>
      <Image src={isHeartFilled ? fullHeart : emptyHeart} 
      className='w-auto h-auto'
      />
    </button>
  )
}