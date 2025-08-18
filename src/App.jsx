import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Navbar/Home.jsx'

function App() {


  return (
    <>
    <div className="App">
      <Navbar />
     
      <Footer />
    </div>
    </>
  )
}

export default App
