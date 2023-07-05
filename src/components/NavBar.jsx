import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
  return (
    <div className='relative'>
    <nav className='text-4xl fixed top-0 left-0 right-0 z-20  lg:bg-white md:bg-white sm:bg-white bg-blue-300 text-blue-600 text-center py-2'> 
    <Link to="/"><span className='text-black'>Insta</span>Dp</Link>
    
    </nav>
    
    </div>
  )
}

export default NavBar