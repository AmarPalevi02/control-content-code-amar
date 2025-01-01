'use client'

import Card from "@/components/ui/Card"
import { getDatas } from "@/utils/fetch"
import { Blog } from "@/utils/types"
import { useEffect, useMemo, useState } from "react"

const Page = () => {
  const [countBlogs, setCountBlog] = useState<number>(0)
  const [countProject, setCountProject] = useState<number>(0)
  const [countBio, setCountBio] = useState<number>(0)
  const [cacheData, setChacheData] = useState({
    blog: 0,
    project: 0,
    bio: 0
  })

  const handleAllAction = async () => {
    try {
      if (cacheData.blog && cacheData.project && cacheData.bio) return

      const blog = await getDatas<Blog[]>("blog")
      const project = await getDatas<[]>('project')
      const bio = await getDatas<[]>('myjobs')

      const datas = {
        blog: blog.length,
        project: project.length,
        bio: bio.length
      }

      setChacheData(datas)
      setCountBlog(datas.blog)
      setCountProject(datas.project)
      setCountBio(datas.bio)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleAllAction()
  }, [])

  const memoizedAllAction = useMemo(() => ({
    blog: countBlogs,
    project: countProject,
    bio: countBio
  }), [countBlogs, countProject, countBio])

  return (
    <div className="flex gap-5">
      <Card title="Blog" count={memoizedAllAction.blog} topage="/blog" />
      <Card title="Project" count={memoizedAllAction.project} topage="/project" />
      <Card title="Bio" count={memoizedAllAction.bio} topage="/bio" />
    </div>
  )
}

export default Page