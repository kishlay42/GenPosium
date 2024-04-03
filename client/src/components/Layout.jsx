import React from 'react'
import { Header, Footer, Tabs } from './index'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <Header/>
    <Tabs/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout