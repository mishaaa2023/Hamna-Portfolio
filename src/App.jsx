import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
    <Routes>
      
      <Route path='/'element={<HomePage/>}/>
      <Route path='/about'element={<AboutPage/>}/>
      <Route path='/projects'element={<ProjectsPage/>}/>
      <Route path='/contact'element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default App