'use client'

import Card from "@/components/ui/Card"
import { getDatas } from "@/utils/fetch"
import { Blog } from "@/utils/types"
import { useEffect, useState } from "react"

const Page = () => {
  const [countBlogs, setCountBlog] = useState<number>(0)
  const [countProject, setCountProject] = useState<number>(0)

  const handleBlogs = async () => {
    try {
      const response = await getDatas<Blog[]>("blog")
      const project = await getDatas<[]>('project')
      setCountBlog(response.length)
      setCountProject(project.length)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleBlogs()
  }, [])
  return (
    <div className="flex gap-5">
      <Card title="Blog" count={countBlogs} topage="/blog" />
      <Card title="Project" count={countProject} topage="/project" />
    </div>
  )
}

export default Page