import React from 'react'
import Video from './Video'

const HomeTop = () => {
  return (
    <div className='font-[Lausanne-normal] text-white text-center pt-5'>
      <div className='text-[9.5vw] leading-[8.5vw] flex justify-center items-start uppercase'>L'étincelle</div>
      <div className='text-[9.5vw] leading-[8.5vw] flex justify-center items-start uppercase'>
        qui
        <div className='h-[7.5vw] w-[16vw] rounded-full overflow-hidden'><Video/></div>
        génère</div>
      <div className='text-[9.5vw] leading-[8.5vw] uppercase flex justify-center items-start'>la créativité</div>
    </div>
  )
}

export default HomeTop
