import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/home/index.jsx'
import Client from './pages/client/index.jsx'
import Instructor from './pages/instructor/index.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/client" element={<Client />} />
              <Route path="/instructor" element={<Instructor />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
