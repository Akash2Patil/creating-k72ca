import React from 'react'
import Vid from '/media/vid.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src={Vid}></video>
    </div>
  )
}

export default Video
