// Components
import Home from './components/Home'
import About from './components/main/About'
import ProjectIndex from './components/main/ProjectIndex'
import NavBar from './components/common/NavBar'

// Bootstrap
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<ProjectIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
