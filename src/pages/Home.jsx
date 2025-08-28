import React from 'react'
import Video from '../components/home/Video'
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
    <div>
      <div className='w-screen h-screen fixed'>
            <Video/>
      </div>
      <div className='relative w-screen h-screen flex flex-col justify-between'>
        <HomeTop/>
        <HomeBottom/>
      </div>
    </div>
  )
}

export default Home
