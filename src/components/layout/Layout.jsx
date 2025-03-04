import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='min-h-screen'>
      <nav className='sticky top-0 z-10'>
      <Navbar/>
      </nav>
     <div className='md:p-0   p-2'>
     <Outlet/>
     </div>
    </div>
  )
}

export default Layout
