"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogDetail({ searchParams }: { searchParams: Promise<{ blogImage: string; blogHeading: string; blogContent: {} }> }) {
  const [data, setdata] = useState<any>([])

  useEffect(() => {
    
    const fetchData = async () => {
      const dataparams :any=  searchParams;
      const { blogImage, blogHeading, blogContent }= await dataparams
      setdata( { blogImage, blogHeading, blogContent });
    }
    fetchData()
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-blaxk">
   {data && (
     <><h1 className="text-5xl font-bold text-blue-400 mb-6 text-center">
        {data.blogHeading}
        </h1><div className="w-full max-w-xl">
            <div className="relative">
              <Image
                src={ data.blogImage}// Replace with your image path
                alt="Blog Image"
                width={600} // Image width
                height={300} // Image height
                className="w-full h-auto border-4 border-blue-500 shadow-lg" />
            </div>
          </div><div className="mt-8 w-full px-4 text-start">
            <p className="text-lg text-gray-700">
          {data.blogContent}
            </p>
          </div></>
   )}
     
    </div>
  );
}
