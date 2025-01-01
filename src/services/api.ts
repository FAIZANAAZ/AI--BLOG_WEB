"use server"

import { client } from "@/sanity/lib/client"

export const fetcher = async () => {
   const res = await client.fetch(`*[_type=='cards'][0].blogs[] {
        'blogImage': blogImage.asset->url,
        'blogHeading': blogHeading,
        'blogDate': blogDate,
        'blogContent': blogContent,
        'blogId':blogId
      }`)

      return res
}