'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortableTextBlock } from '@portabletext/react'






export default function CardGrid() {
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

 

  interface Blog {
    blogImage: string;
    blogHeading: string;
    blogDate: string;
    blogContent: PortableTextBlock[];
    blogId: number;
  }

  const [res, setRes] = useState<Blog[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 12

  useEffect(() => {
    if (res.length > 0) {
      AOS.refresh();
    }
  }, [res]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await client.fetch(
        `*[_type=='cards'][0].blogs[] {
          'blogImage': blogImage.asset->url,
          'blogHeading': blogHeading,
          'blogDate': blogDate,
          'blogContent': blogContent,
          'blogId': blogId
        }`,
        {}, { cache: "no-store" }
      );
      setRes(data)
    }
    fetchBlogs()
  }, [])

  // Calculate the articles to display for the current page
  const startIndex = (currentPage - 1) * articlesPerPage
  // ismy hmny start index nikala he har page ke liye taky hm slice ko dekr bta sken ke is index sy start kro 
  const endIndex = startIndex + articlesPerPage
  // ismy hmny end index nikala he har page ke liye taky hm slice ko btay ke kitny index tk kam krna he
  const currentArticles = res.slice(startIndex, endIndex)
  // slice ko hm btaty hen ke is index sy start krna he or end index sy end krna he

  const totalPages = Math.ceil(res.length / articlesPerPage)
  // /

  return (
    <div className="container mx-auto px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {currentArticles.map((article, index) => (
              <Link  href={`/Blogs/${article.blogId}`} 
            key={index}>
           <div data-aos="flip-left" className="group flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gray-800 
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
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
      
    </div>
  )
}
