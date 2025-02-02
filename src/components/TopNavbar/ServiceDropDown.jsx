import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ServiceDropDown.css'
const ServicePopUp = () => {
        const navigate = useNavigate();
        return (
                <div className='servicePopUpContainer'>
                        <ul>
                                <li onClick={() => navigate('/ai-ml-projects')}> AI/ML</li>
                                <li onClick={() => navigate('/aixpersites')}>AIXpertSites
                                </li>
                                <li onClick={() => navigate('/personal-software')}>Personal Software for Business</li>
                                <li onClick={() => navigate('/web-app-upgradation')}>Web/App Upgradation
                                </li>
                                <li onClick={() => navigate('/developement')}>Development

                                </li>
                                {/* <li onClick={() => navigate('/web-developement')}>Web Development

                                </li> */}
                                <li onClick={() => navigate('/cyber-security')}>Cyber Security
                                </li>
                                <li onClick={() => navigate('/data-security')}>Data Security
                                </li>
                                <li onClick={() => navigate('/platform-services')}>
                                        Platform Services
                                </li>
                                <li onClick={() => navigate('/cms-ecommerce')}>
                                        CMS and E-commerce platforms:

                                </li>
                        </ul>
                </div>
        )
}

export default ServicePopUp