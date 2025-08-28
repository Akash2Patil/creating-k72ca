import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Project from '../pages/Project'
import Agence from '../pages/Agence'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/agence' element={<Agence/>}/>
      </Routes>
    </>
  )
}

export default Routing
