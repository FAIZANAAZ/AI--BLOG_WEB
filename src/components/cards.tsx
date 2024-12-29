'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

// Sample data structure
const articles = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  title: [
    "More Than Just Words: How Retrieval Augmented Generation (RAG) Improves Human-AI Collaboration",
    "Don't Just Generate, Understand! How Retrieval Augmented Generation Makes AI More Insightful",
    "Fact-Checking Your AI? How Retrieval Augmented Generation Ensures Trustworthy Results"
  ][i % 3],
  date: new Date(2024, 4, 7 + (i % 2)),
  image: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ][i % 3]
}))

export default function CardGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <Link
            href="#"
            key={article.id}
            className="group flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gray-800 
                     transition-all duration-300 hover:-translate-y-1
                     hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                     dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col p-6">
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {article.date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                {article.title}
              </h3>

              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
