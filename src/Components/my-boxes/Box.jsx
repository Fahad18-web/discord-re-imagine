import React from 'react'
import BoxImg from '../../assets/boximg.jpg'
import heroimg from '../../assets/heroimg.jpeg' 
function Box({h1}) {
  return (
    <div className='sm:flex rounded-xl p-3 items-center bg-slate-400 mt-10 '>
        <div className="left-sd sm:w-[50%]">
             <div className=''>
                 <img src={BoxImg} alt="boximg" className='rounded-2xl'/>
             </div>
        </div>
        <div className="right-sd sm:w-[50%] ">
             <div className="right-txt sm:flex flex-col justify-center items-center text-center p-3 gap-2 max-sm:bg-slate-800 text-white rounded-lg mt-5">
                  <h1 className='sm:text-5xl p-6 text-white max-sm:text-center text-2xl'>{h1}</h1>
                  <p className='sm:text-3xl text-white max-sm:text-center text-xl'>Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.</p>    
            </div>                              
        </div>
    </div>
  )
}

export default Box