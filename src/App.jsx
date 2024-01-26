import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import menu from './assets/menu.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header>
        <img src={menu} alt="menu" className='menu' onClick={() => setShowNav(!showNav)} />
      </header>

      <Navbar show={showNav} />
      
      <div className='main'>

      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
      </Routes>
      </div>

    </>
  )
}

export default App
