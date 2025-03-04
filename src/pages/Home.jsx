import React from 'react'
import CreatePost from '../components/CreatePost'
import PostContainer from '../components/PostContainer'

const Home = () => {
  return (
    <div className='max-w-2xl mx-auto'>
       <CreatePost /> 
       <PostContainer/>
    </div>
  )
}

export default Home
