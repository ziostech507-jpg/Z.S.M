import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import servicesHeroSectionImage from '../../assets/images/servicesHeroSectionImage.png'
import ServiceDetailsCard from '../../components/ServiceDetailsCard/ServiceDetailsCard'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import ServiceCardSwiper from '../../components/ServiceCard/ServiceCardSwiper'
const Services = () => {
    const heroSectionContent={
        paragraph:'Services for business refer to a range of technology-related solutions provided to support and enhance your business operations.',
        normalHeading:'Grow Your Business With Our ',
        coloredHeading:'IT Services...',
        image:servicesHeroSectionImage
    }
  return (
    <div>
      <TopNavbar/>
      <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} routePath='/contact' showButton={true}/>
      <ServiceCardSwiper/>
      <ServiceDetailsCard/>
      <Testimonials/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default Services
