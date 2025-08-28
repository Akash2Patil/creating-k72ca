import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='flex justify-center items-center gap-3 font-[Lausanne-bold] text-[5.5vw] uppercase'>
      <Link path="/project" className='border-3 border-white rounded-full px-5 pt-4 hover:border-[#d3fd50] hover:text-[#d3fd50] leading-[5.5vw] text-white ' to='/projects'>Projets</Link>
      <Link path="/agence" className='border-3 border-white rounded-full px-5 pt-4 hover:border-[#d3fd50] hover:text-[#d3fd50] leading-[5.5vw] flex justify-center items-center text-white ' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottom
