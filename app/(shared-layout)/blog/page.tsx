"use client"

import { Card } from "@/components/ui/card"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Image from "next/image"

export default function BlogPage() {
  const data = useQuery(api.posts.getPostList)

  return (
    <div className="py-12 ">
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Blog</h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">Insigts, thoughs, and trends from our team.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((post => (
          <Card key={post._id}>
            <div>
              <Image
                src={`https://images.unsplash.com/photo-1773332585760-8b5dc6079a74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt="Random image"
                fill
              />
            </div>
          </Card>

        )))}
      </div>
    </div>
  )
}