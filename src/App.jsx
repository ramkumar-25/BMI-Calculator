import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import { Route,Routes } from 'react-router-dom'
import Info from './components/Info/Info'
import Calculator from './components/Calculator/Calculator'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path="/info"  element={<Info/>}/>
       <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
     
    </div>
  )
}

export default App