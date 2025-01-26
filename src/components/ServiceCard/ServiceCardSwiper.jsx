import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperNavButtons from '../ProjectCard/ProjectSwiperButton'; // Custom navigation buttons
import './ServiceCardSwiper.css';
import ServiceCard from './ServiceCard';
// Service Card images
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

function ProjectSwiper() {
    const data=[
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
        <div className='serviceCardContainer'>
            <h1 className="testimonialHeading"><span>Services Provide</span></h1>
            <p className="testimonialHeadingPara">IT services for business refer to a range of technology-related solutions  <br />provided to support and enhance business operations.</p>
            <div className="ProjectSwiperContainer">
                <Swiper
                    spaceBetween={0}
                    slidesPerView="auto"
                    navigation={true}   // Enabling navigation
                    pagination={{ clickable: true }} // Pagination with clickable option
                    a11y={{ enabled: true }} // Enabling accessibility
                    breakpoints={{
                        // When the screen width is <= 768px
                        768: {
                            slidesPerView: 2, // 1 slide per view on small screens
                            spaceBetween: 10, // Adjust space between slides
                        },
                        // When the screen width is <= 1024px
                        1024: {
                            slidesPerView: 2, // 2 slides per view on medium screens
                            spaceBetween: 20, // Adjust space between slides
                        },
                        // Default settings for larger screens
                        1400: {
                            slidesPerView: 3, // 3 slides per view on large screens
                            spaceBetween: 30, // Adjust space between slides
                        },
                    }}
                >
                    {data.map((item,index)=>{
                        return(
                            <SwiperSlide key={index}><ServiceCard img={item.img} serviceTitle={item.serviceTitle} serviceIcon={item.serviceIcon}  serviceDescription={item.serviceDescription} /></SwiperSlide>
                        )
                    })}
                    {/* <SwiperSlide><ServiceCard /></SwiperSlide>
                    <SwiperSlide><ServiceCard /></SwiperSlide> */}
                    <SwiperNavButtons /> {/* Custom navigation buttons */}
                </Swiper>
            </div>
        </div>
    );
}

export default ProjectSwiper;
