import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Button from './Components/Button'
import Box from './Components/my-boxes/Box'
import DiscordEnd from './Components/DiscordEnd'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Navbar/>
        <Hero/>
        <Button/>
        <Box/>
        <Box/>
        <Box/>
        <DiscordEnd/>
        <Footer/>
      </>
  )
}

export default App
