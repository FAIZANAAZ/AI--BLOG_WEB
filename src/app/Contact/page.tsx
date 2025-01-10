"use client";

import ContactForm from '../../components/contacform';


export default function ContactSection() {
      // for animation 
   
  return (
    <>
      <section className="bg-[#0a1628] text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1   className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Lets talk about your{' '}
              <span className="relative inline-block">
                goals
                <span className="absolute inset-0 border-2 border-red-500 rounded-full transform scale-110"></span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Lets explore how we can work together to help you achieve your goals
            </p>
          </div>

          {/* Locations Section */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-center mb-8">Our Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pakistan Office */}
              <div  className="relative p-6 rounded-lg border border-gray-800 hover:shadow-[0_0_15px_3px_rgb(255,255,0,0.7)]
dark:hover:shadow-[0_0_15px_3px_rgba(255,255,0,0.9)]
 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Pakistan</h3>
                <address className="not-italic text-gray-300 mb-4">
                  7th Floor, Tower A, Naman Midtown, Tulsi Pipe road,
                  <br />
                  Islamabad, Pakistan
                </address>
                <div className="text-gray-300">
                  Office Phone No:{' '}
                  <a 
                    href="tel:+92-22-49209000" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +92-22-49209000
                  </a>
                </div>
              </div>

              {/* USA Office */}
              <div  className="relative p-6 rounded-lg border border-gray-800 hover:shadow-[0_0_15px_3px_rgb(255,255,0,0.7)]
dark:hover:shadow-[0_0_15px_3px_rgba(255,255,0,0.9)]
 transition-colors">
                <h3 className="text-xl font-semibold mb-4">USA</h3>
                <address className="not-italic text-gray-300 mb-4">
                  Fluid AI International Corporation, 1151 Walker Rd
                  <br />
                  Ste 100 DE, 19904-6600, Dover, Delaware, U.S.A
                </address>
                <div className="text-gray-300">
                  Phone no:{' '}
                  <a 
                    href="tel:+1-302-760-9158" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +1 (302) 760-9158
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Email */}
          <div className="text-center mt-12">
            <p className="text-gray-300">
              Contact us at:{' '}
              <a 
                href="mailto:info@fluid.ai"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                info@naaz.ai
              </a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactForm />
    </>
  )
}

