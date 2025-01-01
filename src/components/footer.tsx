import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react'

const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Our Mission", "Contact"]
    },
    {
      title: "Blog",
      links: ["AI Insights", "Latest Trends", "Tech Tutorials"]
    },
    {
      title: "Resources",
      links: ["Documentation", "FAQ", "Support"]
    },
    {
      title: "Connect",
      links: ["LinkedIn", "Facebook", "Instagram"]
    }
  ]

const Footer = () => {
  return (
    <footer className="bg-[#0b0e37] font-sans pt-12 pb-8 px-12 tracking-wide relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-8 z-20 relative">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg text-gray-300 mb-6">{section.title}</h2>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase()}`} className="text-white text-base inline-flex items-center transition-all">
                      <ChevronRight className="inline mr-1.5 h-4 w-4 shrink-0" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-wrap sm:justify-between gap-6 relative  z-20">
          <div className="flex space-x-5">
            <Link href="/facebook" className=" text-base inline-transition-all bg-white">
              <Facebook className="w-5 h-5 " />
            </Link>
            <Link href="/youtube" className=" text-base inline-transition-all bg-white">
              <Instagram className="w-5 h-5 " />
            </Link>
            <Link href="/linkedin" className=" text-base inline-transition-all bg-white">
              <Linkedin className="w-5 h-5 " />
            </Link>
          </div>

          <p className='text-gray-400 text-sm'>2025 AI Insights. Empowering the Future with Technology</p>
        </div>
      </div>
      <Image 
        src="/ailogo.png" 
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-5 -z-0"
      />
    </footer>
  )
}

export default Footer

