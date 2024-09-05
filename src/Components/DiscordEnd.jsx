import React from 'react'
import discordimg from '../assets/endingimg.webp'
import { FiDownload } from "react-icons/fi";
function DiscordEnd() {
  return (
    <div className='sm: mt-10 flex items-center justify-center flex-col p-3'>
        <div className="left ">
            <div className="left-txt">
                <h1 className='text-3xl text-white max-sm:text-center'>YOU CAN'T SCROLL ANYMORE.BETTER GO CHAT.</h1>
                <div className='flex justify-center items-center bg-blue-700 text-white rounded-2xl p-3 gap-2 mt-4'>
                     <div className='text-2xl'><FiDownload /></div>
                    <button className='text-2xl'>Download for windows</button>
                </div>
            </div>
        </div>
        <div className="right max-sm:mt-3">
            <div>
                <img src={discordimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DiscordEnd