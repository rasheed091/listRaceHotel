import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './pages/NavBar'
import Mypage from './pages/Mypage'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './pages/Resume'
import Portfo from './pages/Portfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route element={<Mypage/>} path='/'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<Resume/>} path='/Resume'/>
            <Route element={<Portfo/>} path='/Portfo'/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
