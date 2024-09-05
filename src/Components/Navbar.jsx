import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
// import { useRef, useState } from 'react';
function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 '>
        <div className='text-white text-2xl max-sm:text-xl'>
           <h1 className='max-sm:bg-blue-800 text-white rounded-full p-2'>Discord</h1>
        </div>
        <div className='links sm:flex items-center gap-7 text-white text-xl max-sm:hidden'>
            <a href="/" className='hover:underline'>Download</a>
            <a href="/" className='hover:underline'>Nitro</a>
            <a href="/" className='hover:underline'>Discover</a>
            <a href="/" className='hover:underline'>Safty</a>
            <a href="/" className='hover:underline'>Support</a>
            <a href="/" className='hover:underline'>Blog</a>
            <a href="/" className='hover:underline'>Career</a>
        </div>
        <div className='bg-white p-2 rounded-full max-sm:hidden '>
            <button className=''>Open Discord</button>
        </div>
        <div className=' sm:hidden max-sm:order-1 block text-white text-4xl'>
           <MdOutlineMenu />
        </div>
    </div>
  )
}

export default Navbar