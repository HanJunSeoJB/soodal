'use client'
import {useState} from 'react';
import Image from 'next/image'
import S_blueGood from '/public/images/s_blueGood.png'
import M_blackGood from '/public/images/m_blackGood.png'
import M_blueGood from '/public/images/m_blueGood.png'

export default function GoodToggle() {
  const [isMaterialGood, setMaterialGood] = useState(0);

  /*
  useEffect(async () => {
    const fetchData = async () => {
      const res = await axios.get(...)
      if (res.data.type === 'liked') setLike(true)
    }
      fetchData()
    }, []);
  */


  const GoodToggle = () => {
    setMaterialGood(!isMaterialGood);
  }

  return (
    <button 
      id='good' 
      onClick={GoodToggle}>
      <Image src={isMaterialGood ? M_blueGood : M_blackGood} 
      className='w-auto h-auto'
    />
    </button>
  )
}