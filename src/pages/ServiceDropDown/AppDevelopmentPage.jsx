import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import AppDevelopment from '../../components/ServiceDetailsCard/AppDevelopment'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import AppDevelopmentServiceImage from "../../assets/images/AppDevelopmentServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const AppDevelopmentPage = () => {
    const heroSectionContent = {
        paragraph: 'Revolutionize user experiences with cutting-edge mobile and web applications tailored to your business needs. Transform ideas into reality with seamless app development.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'App Development',
        image: AppDevelopmentServiceImage
    };
    return (
        <div>
            <TopNavbar />
            <HeroSection
                paragraph={heroSectionContent.paragraph}
                normalHeading={heroSectionContent.normalHeading}
                coloredHeading={heroSectionContent.coloredHeading}
                image={heroSectionContent.image}
                routePath='/contact'
                buttonTitle='Get In Touch'
                showButton={true}
            />
            <AppDevelopment />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default AppDevelopmentPage