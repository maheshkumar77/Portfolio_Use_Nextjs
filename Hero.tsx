import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textgenerateeffect'
import Bordermagic from './ui/Bordermagic'
import { FaLocationArrow } from 'react-icons/fa'
import HoverEffect from "./welcome"
const Hero = () => {
  return (
    <div className=' pb20 pt-36'>
        <div >
            <Spotlight className=' -top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className=' top-10 left-full h-[80vh] w-[50vw] ' fill="purple"/>
            <Spotlight className=' top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
      <div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     
    </div>
    <HoverEffect/>
    <div className=' flex justify-center relative my-20 z-10 '>
        <div className=' max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                Dynamic web magic with Next.js 
            </h2>
            <TextGenerateEffect
            className=' text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transforming concepts into seamless 
            expreance'
            
            />
            <p className=' text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl '>
                Hii, I&rsquo;am Mahesh Ku. Sahu, a Fullstack Devloper 
            </p>
           <a href='#'>
           <Bordermagic
           titel='Show my work'
           icon={<FaLocationArrow/>}
           position='right'
           />
           </a>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Hero
