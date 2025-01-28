import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import AiMlProjectsPage from '../pages/ServiceDropDown/AiMlProjectsPage'

import AiXpertSitesPage from '../pages/ServiceDropDown/AiXpertSitesPage'
import AppDevelopmentPage from '../pages/ServiceDropDown/AppDevelopmentPage'
import CyberSecurityPage from '../pages/ServiceDropDown/CyberSecurityPage'
import DataSecurityPage from '../pages/ServiceDropDown/DataSecurityPage'
import PersonalSoftwarePage from '../pages/ServiceDropDown/PersonalSoftwarePage'
import WebAppUpgradationPage from '../pages/ServiceDropDown/WebAppUpgradationPage'
import WebDevelopmentPage from '../pages/ServiceDropDown/WebDevelopmentPage'
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
        {/* allservices */}
        <Route path="/ai-ml-projects" element={<AiMlProjectsPage />} />
        <Route path='/aixpersites' element={<AiXpertSitesPage />} />
        <Route path='/app-developement' element={<AppDevelopmentPage />} />
        <Route path="/cyber-security" element={<CyberSecurityPage />} />
        <Route path="/data-security" element={<DataSecurityPage />} />
        <Route path='/personal-software' element={<PersonalSoftwarePage />} />
        <Route path='/web-app-upgradation' element={<WebAppUpgradationPage />} />
        <Route path='/web-developement' element={<WebDevelopmentPage />} />
      </Routes>
    </Router>
  )
}

export default routes
