import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Login from './Login'
import Signin from './Signin'
import FrgtPass from './FrgtPass'
import UserInfo from './UserInfo'

const RouterCom = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
      
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/FrgtPass' element={<FrgtPass/>}/>
        <Route path='/UserInfo' element={<UserInfo/>}/>
    </Routes>
  )
}

export default RouterCom
