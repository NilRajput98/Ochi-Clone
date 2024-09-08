import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'> raise funds, sell products, explain complex ideas,</span>  and <span className='underline'>hire great people.</span> </h1>
        <div className='w-full border-t-[1px] border-[#a1b562] mt-20 flex'>
            <div className='w-1/2 font-lg font-medium font-["Neue_Montreal"] mt-4'>What You Can Expect:</div>
            <div className='w-1/3 font-lg font-medium font-["Neue_Montreal"] mt-4'>
            <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
        </div>
        </div>
        <div className='flex gap-5 w-full border-t-[1px] border-[#a1b562] mt-20'>
          <div className='w-1/2'>  
            <h1 className='text-[4rem] mt-2 ' >Our approach :</h1>
            <button className='flex items-center gap-10 uppercase px-10 py-6 bg-zinc-900 rounded-full text-white mt-5'>Read More
<div className='w-2 h-2 bg-zinc-100 rounded-full'></div>

            </button></div>
            <div className='w-1/2 h-[70vh] rounded-2xl mt-4 bg-[url("/Homepage.jpg")] bg-cover bg-center'></div>
        </div>
    </div>
  )
}

export default About