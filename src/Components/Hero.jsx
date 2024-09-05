import React from 'react'
import discord   from '../assets/discord.jpeg' 
function Hero() {
  return (
    <div className='sm:flex mt-10 bg-blue-800 justify-between items-center rounded-xl p-3 max-sm:flex-col text-center'>
        <div className="left-cnt sm:w-[50%]">
            <div className="lft-text flex flex-col items-center justify-center">
                <h1 className='text-white text-5xl font-bold p-3 '>Group chat thats all fun  games</h1>
                <p className='text-white p-3 text-3xl'>Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.</p>
            </div>
        </div>
        <div className="right-cnt sm:w-[50%]">
             <div>
                <img src={discord} alt="discord" className='rounded-2xl blur-sm' />
             </div>
        </div>
    </div>
  )
}

export default Hero