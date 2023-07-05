import React from 'react'
import {Link} from "react-router-dom"
const SiteFooter = () => {
  return (
    <div className=' bg-blue-200 text-center  py-8  flex flex-col'>
        <Link to="/aboutUs"><span className='text-blue-900 text-lg'>About Us</span></Link>
        <Link to="/privacy"><span className='text-blue-900 text-lg'>Privacy</span></Link>
        <Link to="/terms"><span className='text-blue-900 text-lg'>Terms</span></Link>
        <span>Copyright © 2023  InstaDp - Download Instagram ProfilePic   Version 1.0  . All Rights Reserved</span>
    </div>
  )
}

export default SiteFooter