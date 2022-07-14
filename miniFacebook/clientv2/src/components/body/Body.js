import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Login from './authentication/Login'
import Register from './authentication/Register'
import Home from './home/Home'
import Status from './status/Status'
import Story from './story/Story'

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' exact element={<Home/>}></Route>
        <Route path='/story' exact element={<Story/>}></Route>
        <Route path='/status' exact element={<Status/>}></Route>

        <Route path='/login' exact element={<Login/>}></Route>
        <Route path='/register' exact element={<Register/>}></Route>
        <Route path='/' element={<Navigate to='/home'/>}></Route>
      </Routes>
    </div>
  )
}

export default Body