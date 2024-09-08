import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""/>
            <button className='absolute left-10 px-5 py-1 bg- bottom-10 border-2 rounded-full text-[#CDEA68] border-[#CDEA68]'>&copy; 2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
        <div className='card relative w-1/2 h-full  bg-zinc-900 rounded-xl flex items-center justify-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""/>
        <button className='absolute left-10 px-5 py-1 bg- bottom-10 border-2 rounded-full text-zinc-100 border-zinc-100 tracking-tight'>RATING5.0 ON CLUTCH</button></div>
        <div className='card relative w-1/2 h-full  bg-zinc-900 rounded-xl flex items-center justify-center'>
        <img className='w-24 rounded-full' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""/>
        <button className='absolute left-10 px-5 py-1 bg- bottom-10 border-2 rounded-full text-zinc-100 border-zinc-100 tracking-tight'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>

    </div>
  )
}

export default Cards