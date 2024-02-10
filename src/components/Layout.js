import React from 'react'
import Footer from './Footer'
import Headers from './Headers'
import { Toaster } from 'react-hot-toast'


const Layout = (props) => {
  return (
    <div>
        <Headers/>
        <main style={{minHeight: "85vh"}}>
        {props.children}
        <Toaster />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout