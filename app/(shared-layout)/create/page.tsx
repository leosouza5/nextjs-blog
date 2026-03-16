import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateRoute() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Create Post</h1>
        <p className="text-xl text-muted-foreground mt-4">Share your thoughts with the big world </p>
      </div>
      <Card className="w-full max-x-xl mx-auto">
        <CardHeader>
          <CardTitle>Create Blog Article</CardTitle>
          <CardDescription>Create a new blog article</CardDescription>
        </CardHeader>
        <CardContent>
          <form>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}