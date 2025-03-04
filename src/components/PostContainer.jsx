import React from 'react'
import PostCard from './PostCard'
import { useSelector } from 'react-redux'

const PostContainer = () => {

    const posts = useSelector((state) => state.posts?.posts);
    if(posts.length === 0) return (<div className='h-screen flex items-center justify-center bg-base-200'>Nor post found</div>)


  return (
    <div className='flex card  flex-col gap-1'>
      {posts.map((post)=>(
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostContainer
