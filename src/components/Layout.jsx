import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import Navbar from './Navbar'
import Fotter from './Fotter'

const Layout = () => {
  return (
    <div>
        <Menu/>
        <Navbar/>
        <Outlet/>
        <Fotter/>
      
    </div>
  )
}

export default Layout
