'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Youtube, Twitter, Share2, MessageSquare } from 'lucide-react'
import { sendEmail } from '../utils/emailServices'

export default function ContactForm() {
  // for emailjs
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [contact, setContact] = useState<number>()

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault()
    const templateParams = {
      to_name: "Faiza Naaz",
      from_name: name,
      email: email,
      message: message,
      contact: contact
    }
    try {
      await sendEmail(templateParams )
      alert("Email sent successfully")
      setName("")
      setEmail("")
      setMessage("")
      setContact(undefined)

    } catch (error) {
      console.log("EmailJs Error", error);
      alert("Failed to sent email")



    }
  }
  // for animation
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
    <div  className="bg-white py-16 px-4 ">
      <div data-aos="zoom-in" className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Lets connect !</h2>
          <p className="text-gray-600">
            Tell us a bit about yourself & we will promptly get in touch with you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1  gap-6">
            <div className="space-y-2 w-full gap-2 flex justify-center items-center">
              <Label htmlFor="name">Name*</Label>
              <Input 
                id="name" 
                className='border-gray-400 border-2'
                placeholder=" Faiza Naaz" 
                required 
                name="name" value={name} onChange={(e) => setName(e.target.value)}
              />
            </div>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 gap-2 flex justify-center items-center">
              <Label htmlFor="email">Email*</Label>
              <Input 
                id="email" 
                type="email" 
                className='border-gray-400 border-2'
                placeholder="naaz@company.pk" 
                required 
                name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2  flex justify-center items-center gap-2">
              <Label htmlFor="phone">Contact number</Label>
              <Input 
                className='border-gray-400 border-2'
                id="phone" 
                type="tel" 
                placeholder="+92 300 1234567" 
                name='contact' value={contact} onChange={(e) => setContact(parseInt(e.target.value))}
               
              />
            </div>
          </div>


          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Please type your message here..." 
              className="min-h-[150px] " 
              name='message' value={message} onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-800 border-black md:px-8 border-2  text-white" >
            Submit
          </Button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="icon" className="rounded-full">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Youtube className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
