import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center h-[400px] sm:h-[600px] '>
       <Image 
              src="/hero.jpeg" 
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-30 -z-0"
            />
            <h1 className='text-white text-4xl shadow-2xl shadow-white font-bold md:text-[100px] opacity-100 z-10 bg-black'>OUR BLOGS</h1>
    </div>
  )
}

export default Hero
