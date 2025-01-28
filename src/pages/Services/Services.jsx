import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import servicesHeroSectionImage from '../../assets/images/servicesHeroSectionImage.png'
import ServiceDetailsCard from '../../components/ServiceDetailsCard/ServiceDetailsCard'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import ServiceCardSwiper from '../../components/ServiceCard/ServiceCardSwiper'
// images and icons
import AiMLServiceCardImage from '../../assets/images/AiMlServiceCardImage.png';
import AiXpertSitesCardimage from '../../assets/images/AiXpertSitesCardimage.png';
import personalSoftwareServiceCardImage from '../../assets/images/personalSoftwareServiceCardImage.png';
import webAppServiceCardImage from '../../assets/images/webAppServiceCardImage.png';
import AppDevelopmentServiceCardImage from '../../assets/images/AppDevelopmentServiceCardImage.png';
import webDevelopmentServiceCardImage from '../../assets/images/webDevelopmentServiceCardImage.png';
import dataSercurityServiceCardImage from '../../assets/images/dataSercurityServiceCardImage.png';
import cyberSecurityServiceCardImage  from '../../assets/images/cyberSecurityServiceCardImage.png';
// service Card Icons
import aiMlServiceIcon from '../../assets/Icons/AiMlServiceIcon.png'
import AiXpertsiteServiceIcon from '../../assets/Icons/AiXpertsiteServiceIcon.png'
import personalSoftwareServiceCardIcon from '../../assets/Icons/personalSoftwareServiceCardIcon.png'
import webAppServiceCardIcon from '../../assets/Icons/webAppServiceCardIcon.png'
import appDevelopmentServiceCardIcon from '../../assets/Icons/appDevelopmentServiceCardIcon.png'
import webDevelopmentServiceCardIcon from '../../assets/Icons/webDevelopmentServiceCardIcon.png'
import dataSercurityServiceCardIcon from '../../assets/Icons/dataSercurityServiceCardIcon.png'
import cyberSecurityServiceCardIcon from '../../assets/Icons/cyberSecurityServiceCardIcon.png';
const Services = () => {
    const heroSectionContent={
        paragraph:'Services for business refer to a range of technology-related solutions provided to support and enhance your business operations.',
        normalHeading:'Grow Your Business With Our ',
        coloredHeading:'IT Services...',
        image:servicesHeroSectionImage
    }
    const serviceCardData =[
      {
          img:AiMLServiceCardImage, 
          serviceTitle:'AI/ML Projects',
          serviceDescription:'Forefront of technology, innovation across industries by more intelligent and automated solutions.',
          serviceIcon:aiMlServiceIcon,
          
      },
      {
          img:AiXpertSitesCardimage,
          serviceTitle:'AIXpertSites',
          serviceDescription:'A blend of "AI" and "Expert," emphasizing your expertise in creating AI-powered websites.',
          serviceIcon:AiXpertsiteServiceIcon,
      },
      {
          img:personalSoftwareServiceCardImage,
          serviceTitle:'Personal Software for Business',
          serviceDescription:'To streamline workflows, improve productivity, and make it easier to organize and automate routine tasks. ',
          serviceIcon:personalSoftwareServiceCardIcon,
      },
      {
          img:webAppServiceCardImage,
          serviceTitle:'Web/App Upgradation',
          serviceDescription:'Updating and enhancing an existing website to improve its performance, security, and user experience.',
          serviceIcon:webAppServiceCardIcon,
      },
      {
          img:AppDevelopmentServiceCardImage,
          serviceTitle:'App Development',
          serviceDescription:'Development involves the process of creating software applications for mobile devices.',
          serviceIcon:appDevelopmentServiceCardIcon,
      },
      {
          img:webDevelopmentServiceCardImage,
          serviceTitle:'Web Development',
          serviceDescription:'Web development involves the creation and maintenance of websites and web applications.',
          serviceIcon:webDevelopmentServiceCardIcon
      },
      {
          img:dataSercurityServiceCardImage,
          serviceTitle:'Data security and protection',
          serviceDescription:'Involves safeguarding data from unauthorized access and ensuring its privacy, integrity, and legal compliance.',
          serviceIcon:dataSercurityServiceCardIcon,
      },
      {
          img:cyberSecurityServiceCardImage,
          serviceTitle:'Cyber Security',
          serviceDescription:'The protection of systems, networks and data from cyber threats and attacks.',
          serviceIcon:cyberSecurityServiceCardIcon,
      },
  ]
  return (
    <div>
      <TopNavbar/>
      <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} routePath='/contact' showButton={true}/>
      <ServiceCardSwiper data={serviceCardData}  showRouteButton={false}/>
      <ServiceDetailsCard  />
      <Testimonials/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default Services
