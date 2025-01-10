'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

import { PortableTextBlock } from '@portabletext/react'

interface BlogData {
  blogImage: string;
  blogHeading: string;
  blogContent: PortableTextBlock[];
  blogDate: string;
  blogId: number
}





export default function LatestCard() {
  // for animation 


  interface Blog {
    blogImage: string;
    blogHeading: string;
    blogDate: string;
    blogContent: PortableTextBlock[];
    blogId: number;
  }

  const [res, setRes] = useState<Blog[]>([])


  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await client.fetch(`*[_type=='cards'][0].blogs[] {
          'blogImage': blogImage.asset->url,
          'blogHeading': blogHeading,
          'blogDate': blogDate,
          'blogContent': blogContent,
          'blogId':blogId
        }`)
      setRes(data)
    }
    fetchBlogs()
  }, [])

  // Calculate the articles to display for the current page


  return (
    <div className="container mx-auto px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[...res].reverse().slice(0,3).map((article:BlogData, index) => (
              <Link  href={`/Blogs/${article.blogId}`} 
            key={index}>
           <div  className="group flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gray-800 
            transition-all duration-300 border border-blue-500 
            hover:-translate-y-1
            hover:shadow-[0_0_15px_3px_rgb(59,130,246,0.7)]
            dark:hover:shadow-[0_0_15px_3px_rgba(59,130,246,0.9)]">
           <div className="relative aspect-[16/9] overflow-hidden"  >
              <Image
                src={article.blogImage}
                alt={article.blogHeading}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col p-6">
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(article.blogDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                {article.blogHeading}
              </h3>

              <div className="mt-4  text-blue-600 dark:text-blue-400">
                <button className='px-2 py-1 bg-blue-500 text-white flex items-center hover:bg-blue-700'>
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
           </div>
          </Link>
        ))}
     
      </div>

      {/* Pagination Controls */}
      
    </div>
  )
}
