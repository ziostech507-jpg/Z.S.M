import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'
import Faq from '../pages/Faq/Faq'
import Blog from '../pages/Blog/Blog'
import Services from '../pages/Services/Services'
import Products from '../pages/Products/Products'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectSwiper from '../components/ProjectCard/ProjectSwiper'
import ServiceSwiper from '../components/ServiceCard/ServiceCardSwiper'
const routes = () => {
  return (
    <Router>
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projectcard" element={<ProjectCard />} />
        <Route path="/projectSwiper" element={<ProjectSwiper />} />
        <Route path="/serviceSwiper" element={<ServiceSwiper />} />
      </Routes>
  </Router>
  )
}

export default routes
