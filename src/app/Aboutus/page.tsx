"use client"

import { Facebook, Instagram, Linkedin, Twitter, Github, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'


export default function AboutSection() {
  // for animation 


    
  const socialIcons = [
    { name: 'Facebook', icon: <Facebook className="w-8 h-8" /> },
    { name: 'Instagram', icon: <Instagram className="w-8 h-8" /> },
    { name: 'LinkedIn', icon: <Linkedin className="w-8 h-8" /> },
    { name: 'Twitter', icon: <Twitter className="w-8 h-8" /> },
    { name: 'WhatsApp', icon: <MessageCircle className="w-8 h-8" /> },
    { name: 'GitHub', icon: <Github className="w-8 h-8" /> },
  ]

  const teamMembers = [
    { id: 1, name: 'John Doe', image: '/team1.jpg', color: 'bg-purple-500' },
    { id: 2, name: 'Jane Smith', image: '/team2.jpg', color: 'bg-cyan-500' },
    { id: 3, name: 'Alice Johnson', image: '/team5.jpg', color: 'bg-blue-500' },
    { id: 4, name: 'Bob Brown', image: '/team4.jpg', color: 'bg-yellow-500' },
    { id: 5, name: 'Charlie Davis', image: '/team6.jpg', color: 'bg-pink-500' },
  ]

  return (
    <section className="w-full">
      {/* Hero Section with Shapes */}
      <div className="relative bg-[#0a1628] text-white py-20 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute left-0 top-0 w-48 h-48 bg-[#ffc107] rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 top-0 w-48 h-48 bg-[#40e0d0] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#ff4081] rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 "  >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto">
          {/* Empowering Text */}
          <h2  className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16">
            Empowering Organizations to Achieve Outcomes
          </h2>

          {/* Social Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-24">
            {socialIcons.map((social) => (
              <div
                key={social.name}
                className="w-16 h-16 flex items-center justify-center hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                {social.icon}
              </div>
            ))}
          </div>

          {/* Our Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Story Title */}
              <div  className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-bold">Our story</h2>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-400 rounded-full"></div>
              </div>

              {/* Story Content */}
              <div  className="space-y-6 text-gray-600">
                <p >
                  The entrepreneurial journey started from a 2-person start-up to 65 member
                  strong team in 5 countries and aims to reinvent the way organizations work.
                  We have built a reputation for our groundbreaking work in revolutionizing
                  work dynamics and our innovative use of technology. Our diverse and
                  talented team continues to push boundaries, constantly striving to create
                  solutions that empower businesses and individuals alike.
                </p>
                <p>
                  Our mission is to completely transform the way organizations operate. We
                  have gained recognition for our groundbreaking work in revolutionizing work
                  dynamics and our innovative use of technology.
                </p>
                <p>
                  Back in 2012, Our Founders Abhinav Aggarwal and Raghav Aggarwal
                  embarked on this adventure with nothing but just an idea. They assembled a
                  talented team of engineers to bring their vision to life.
                </p>

                {/* Read More Link */}
                <div>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <path
                    d="M50,200 C50,100 150,50 250,50 C350,50 350,150 350,250 C350,350 250,350 150,350 C50,350 50,250 50,200"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    className="path"
                  />
                

{teamMembers.map((member, index) => {
  const positions = [
    { x: 50, y: 200 },
    { x: 150, y: 50 },
    { x: 350, y: 150 },
    { x: 350, y: 250 },
    { x: 150, y: 350 },
  ];
  return (
    <g
      key={member.id}
      transform={`translate(${positions[index].x - 40}, ${positions[index].y - 40})`}
    >
      <circle cx="40" cy="40" r="40" className={`${member.color} opacity-20`} />
      <circle cx="40" cy="40" r="35" className={member.color} />
      <foreignObject x="10" y="10" width="60" height="60">
        <Image
          src={member.image}
          alt={`${member.name}'s profile picture`}
          width={60}
          height={60}
          className="rounded-full "
        />
      </foreignObject>
    </g>
  );
})}

                </svg>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Target Illustration */}
              <div className="relative">
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  {/* Target Circle */}
                  <div className="absolute inset-0 bg-yellow-100 rounded-full transform -rotate-12"></div>
                  <div className="relative z-10">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {/* Target circles */}
                      <circle cx="200" cy="200" r="160" fill="#ff1a1a" />
                      <circle cx="200" cy="200" r="128" fill="#fff" />
                      <circle cx="200" cy="200" r="96" fill="#ff1a1a" />
                      <circle cx="200" cy="200" r="64" fill="#fff" />
                      <circle cx="200" cy="200" r="32" fill="#ff1a1a" />
                      
                      {/* Arrows */}
                      <g transform="translate(200, 200)">
                        <path d="M-140,-140 L-20,-20" stroke="#4338ca" strokeWidth="4" />
                        <path d="M-150,-50 L-20,-20" stroke="#06b6d4" strokeWidth="4" />
                        <path d="M-130,20 L-20,-20" stroke="#fbbf24" strokeWidth="4" />
                        <path d="M-100,100 L-20,-20" stroke="#a855f7" strokeWidth="4" />
                        
                        {/* Arrow heads */}
                        <polygon points="-25,-15 -15,-25 -20,-20" fill="#4338ca" />
                        <polygon points="-25,-15 -15,-25 -20,-20" fill="#06b6d4" transform="rotate(-30)" />
                        <polygon points="-25,-15 -15,-25 -20,-20" fill="#fbbf24" transform="rotate(-60)" />
                        <polygon points="-25,-15 -15,-25 -20,-20" fill="#a855f7" transform="rotate(-90)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mission Content */}
              <div className="space-y-8">
                <div className="relative inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    Our mission
                    <span className="text-pink-500 text-2xl">╱╲</span>
                  </h2>
                </div>

                <div className="space-y-6 text-gray-600">
                  <p  className="text-lg">
                    Our mission is to equip employees at all levels with power of Gen AI, not to replace them but to streamline their processes and empower them to utilize their unique skills and capabilities in more valuable and impactful endeavors.
                  </p>
                  
                  <p>
                    Whether its automating employee support, developing immersive virtual assistants, or enhancing content creation capabilities, our generative technology offers a range of possibilities for optimizing workflows and maximizing productivity
                  </p>
                  
                  <p className="font-medium text-gray-800">
                    Remember, the power of AI is within your reach. Explore the possibilities, embrace innovation, and transform the way your organization operates.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

