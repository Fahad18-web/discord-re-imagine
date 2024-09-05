import React from 'react'
import { FiDownload } from "react-icons/fi";

function Button() {
  return (
    <div className=' sm:mt-10 flex justify-center items-center gap-3 rounded-xl p-2 max-sm:flex-col mt-10 gap-3'>
        <div className="sm:btns flex gap-2 items-center bg-white text-slate-800 p-3 rounded-full text-2xl max-sm:text-xl">
             <div> <FiDownload /></div>
             <button>Download in Windows</button>
        </div>
            <button className='sm:flex gap-2 items-center bg-white text-slate-800 p-3 rounded-full text-2xl max-sm:text-xl'>Open discord in your browser</button>
    </div>
  )
}

export default Button