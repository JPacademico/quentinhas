import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import menu from './assets/menu.svg'
import './App.css'
import Home from './pages/Home'
import Almoço from './pages/Almoço'
import Cafe from './pages/Cafe'
import Dinner from './pages/Dinner'
import Drinks from './pages/Drinks'


function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header>
        <img src={menu} alt="menu" className='menu' onClick={() => setShowNav(!showNav)} />
        <h1 className='nome'>Quentinhas do <strong>Grau</strong></h1>
        <h3>Veg <img className='veg-img' src="src\assets\folha.svg" alt="" /></h3>
      </header>

      <Navbar show={showNav} />
      
      <div className='main'>

      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/almoço"} element={<Almoço />} />
          <Route path={"/cafe"} element={<Cafe />} />
          <Route path={"/janta"} element={<Dinner />} />
          <Route path={"/bebidas"} element={<Drinks />} />
      </Routes>
      </div>

    </>
  )
}

export default App
