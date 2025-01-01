"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

const Hero = () => {
  useEffect(() => {
            if (typeof window !== "undefined") {
              AOS.init({
                offset: 200, // Jab 200px scroll ho, tab animation trigger ho
                duration: 400, // Animation ka duration
                easing: 'ease-in-out', // Animation ka easing effect
                once: true, 
                delay: 100, // Animation sirf ek baar chale
              });
            }
          }, []); 
  return (
    <div className='relative flex items-center justify-center h-[400px] sm:h-[600px] '>
       <Image 
              src="/hero.jpeg" 
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-30 -z-0"
            />
            <h1 data-aos="zoom-in-up" className='text-white text-4xl shadow-2xl shadow-white font-bold md:text-[100px] opacity-100 z-10 bg-black'>OUR BLOGS</h1>
    </div>
  )
}

export default Hero
