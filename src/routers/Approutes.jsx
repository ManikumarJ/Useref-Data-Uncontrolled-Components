import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ChangeTag from '../components/ChangeText'

const Approutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ChangeTag' element={<ChangeTag/>}/>
        </Routes>
    </>
  )
}

export default Approutes