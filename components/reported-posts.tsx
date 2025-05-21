"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Post {
  id: number
  title: string
  excerpt: string
  content: string
}

interface ReportedPostsProps {
  posts: Post[]
}

export function ReportedPosts({ posts }: ReportedPostsProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Reported Posts</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <div key={post.id} className="grid gap-2">
              <div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
              <div className="flex justify-end">
                <Button size="sm" variant="outline" onClick={() => setSelectedPost(post)}>
                  View
                </Button>
              </div>
              <Separator className="mt-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedPost?.title}</DialogTitle>
            <DialogDescription>{selectedPost?.excerpt}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>{selectedPost?.content}</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="destructive">Delete Post</Button>
            <Button variant="outline">Ignore Report</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
