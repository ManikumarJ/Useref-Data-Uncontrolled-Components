import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ChangeTag from '../components/ChangeText'
import FocusInput from '../components/FocusInput'
const Approutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ChangeTag' element={<ChangeTag/>}/>
            <Route path='/FocusInput' element={<FocusInput/>}/>      

        </Routes>
    </>
  )
}

export default Approutes