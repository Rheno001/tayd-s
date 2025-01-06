import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/home/index.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div className='p-[0px]'>
      <Navbar/>
      <Home/>
      <Footer/>

    </div>
  )
}

export default App
