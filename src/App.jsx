import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Button from './Components/Button'
import Box from './Components/my-boxes/Box'
import DiscordEnd from './Components/DiscordEnd'
import Footer from './Components/Footer'
// import heroimg from '../../assets/boximg.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Navbar/>
        <Hero/>
        <Button/>
        <Box h1='Make your group chats more fun'/>
        <Box h1='stream like you are in the same room' />
        <Box h1='Hop in when you are free , no need to call'/>
        <DiscordEnd/>
        <Footer/>
      </>
  )
}

export default App
