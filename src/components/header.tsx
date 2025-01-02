'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, LogIn } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className='flex  py-4 px-4 sm:px-6  font-sans min-h-[60px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center bg-black justify-between gap-4 w-full max-w-screen-xl mx-auto'>
        <Link href="/" className="max-sm:hidden">
          <Image src="/ailogo.png" alt="logo" width={124} height={26} />
        </Link>
      <Link href="/" className="hidden max-sm:block">
          <Image src="/ailogo.png" alt="logo" width={36} height={36} />
        </Link>

        <div className={`lg:!block ${isMenuOpen ? 'block' : 'hidden'}  max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
          {isMenuOpen && (
            <button onClick={toggleMenu} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full  w-9 h-9 flex items-center justify-center border'>
              <X className="w-3.5 h-3.5 text-black" />
            </button>
          )}
<ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ">
  {/* Logo for Mobile */}
  <li className="mb-6 hidden max-lg:block">
    <Link href="/">
      <Image
        src="/ailogo.png"
        alt="logo"
        width={144}
        height={36}
      />
    </Link>
  </li>

  {/* Home */}
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <Link
      href="/"
      className="hover:underline hover:text-[#007bff]  text-white font-bold block text-[26px]"
    >
      Home
    </Link>
  </li>

 

  {/* Blog */}
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <Link
      href="/Blogs"
      className="hover:underline hover:text-[#007bff] text-white  font-bold block text-[26px]"
    >
      Blog
    </Link>
  </li>

  {/* About */}
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <Link
      href="/Aboutus"
      className="hover:underline hover:text-[#007bff] text-white  font-bold block text-[26px]"
    >
      About us
    </Link>
  </li>

  {/* Contact */}
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <Link
      href="/Contact"
      className="hover:underline hover:text-[#007bff] text-white font-bold block text-[26px]"
    >
      Contact
    </Link>
  </li>
</ul>

        </div>

        <div className='flex items-center max-lg:ml-auto space-x-4'>
          <button type="button" className="bg-blue-600 hover:bg-blue-700 px-4 py-2  text-white text-[15px] font-semibold flex items-center justify-center gap-2">
            <LogIn className="w-4 h-4" />
            Write a Blog
          </button>

          <button onClick={toggleMenu} className='lg:hidden'>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

