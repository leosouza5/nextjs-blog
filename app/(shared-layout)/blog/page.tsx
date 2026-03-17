
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api"
import { fetchQuery } from "convex/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

export default function BlogPage() {

  const data = LoadBlogList()
  return (
    <div className="py-12 ">
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Blog</h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">Insigts, thoughs, and trends from our team.</p>
      </div>
      <Suspense fallback={
        <SkeletonLoadingUi />
      }>
        <LoadBlogList />
      </Suspense>
    </div>
  )
}

async function LoadBlogList() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await fetchQuery(api.posts.getPostList)
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((post => (
        <Card className="pt-0" key={post._id}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={`https://images.unsplash.com/photo-1773332585760-8b5dc6079a74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Random image"
              className="rounded-t-lg"
              // width={500}
              // height={800}
              fill

            />
          </div>
          <CardContent>
            <Link href={`/blog/${post._id}`}>
              <h1 className="text-2xl font-bold hover:text-primary">{post.title}</h1>
            </Link>
            <p className="text-muted-foreground line-clamp-3">{post.body}</p>
          </CardContent>
          <CardFooter>
            <Link className={buttonVariants({ className: "w-full" })} href={`/blog/${post._id}`}>Read more</Link>
          </CardFooter>
        </Card>

      )))}
    </div>
  )
}

async function SkeletonLoadingUi() {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <div className="flex flex-col space-y-3" key={i}>
          <Skeleton className="h-48 w-full rounded-xl" />
          <div className="space-y-2 flex flex-col">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}