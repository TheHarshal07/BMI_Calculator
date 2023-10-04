import {BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home/Home'
import About from './components/About'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>    
    </>
  )
}
