import React from 'react'
import './index.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SiteFooter from './components/SiteFooter';
import {Routes , Route } from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Privacy from "./pages/Privacy"
import Terms from './pages/Terms';
const App = () => {
  return (
    <div >
              <NavBar/>

              <Routes >
                        <Route path='/' element={<Main/>}/>
                        <Route path='/aboutUs' element={<AboutUs/>}/>
                        <Route path='/privacy' element={<Privacy/>}/>
                        <Route path='/terms' element={<Terms/>}/>
                        <Route path="*" element={<div className='text-3xl mt-20 text-center'> 404 Not Found</div>}/>
              </Routes>
              


              <SiteFooter/>
            

    </div>
  )
}

export default App