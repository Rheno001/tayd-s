import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/home/index.jsx'
import Client from './pages/client/index.jsx'
import Instructor from './pages/instructor/index.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>

    </div>
  )
}

export default App
