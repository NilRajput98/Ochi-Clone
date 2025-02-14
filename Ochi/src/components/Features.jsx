import {motion, useAnimation} from "framer-motion";
import React from 'react'

function Features() {
 const cards =[useAnimation(), useAnimation()];
 const handleHover = (index)=>{
  cards[index].start({y:"0"});
 };
 const handleHoverEnd= (index)=>{
  cards[index].start({y:"100%"});
 };

  return (
    <div data-scroll data-scroll-section className='relative w-full py-10' >
        <div className='w-full px-20 border-b-[1px] border-zinc-500'>
            <h1 className='text-[5rem] tracking-tight mb-10 '>Featured Projects</h1>
            
       </div>
       <div className=" px-10">
        <div className='cards w-full flex gap-10 mt-10 '>
                <motion.div 
                onHoverStart={()=> handleHover(0)}
                onHoverEnd={()=> handleHoverEnd(0)}
                className="cardcontainer relative w-1/2 h-[75vh]">
                <h1 className='absolute flex overflow-hidden  font-bold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leaing-none tracking-tighter text-8xl text-[#CDEA68] '>
                {"FYDE".split("").map((item, index) =>
                     <motion.span
                     initial={{y:"100%"}}
                     animate={cards [0]}
                     transition={{ease:[0.22, 1, 0.36, 1], delay: index*.06}}
                     className="inline-block"

                     >
                      {item}
                     </motion.span> )}
                </h1>
                <div className="card w-full h-full overflow-hidden rounded-2xl">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" /></div>
                </motion.div>
                <motion.div 
                onHoverStart={()=> handleHover(1)}
                onHoverEnd={()=> handleHoverEnd(1)}
                className="cardcontainer relative  w-1/2 h-[75vh]">
                <h1 className='absolute flex overflow-hidden font-bold right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leaing-none tracking-tighter text-8xl text-[#CDEA68] '>
                {"VISE".split('').map((item, index) =>
                     <motion.span
                     initial={{y:"100%"}}
                     animate={cards [1]}
                     transition={{ease:[0.22, 1, 0.36, 1], delay: index*.06}}
                     className="inline-block"

                     >
                      {item}
                     </motion.span> )}
                </h1>
                <div className="card w-full overflow-hidden h-full rounded-2xl">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
                </motion.div>
            </div></div>
    </div>
  )
}

export default Features