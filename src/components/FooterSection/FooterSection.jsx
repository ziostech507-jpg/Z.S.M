import React from 'react';
import './FooterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/ziostech_logo-footer.png';

const FooterSection = () => {
    return (
        <footer className="footer">
            <img className="footer-logo" src={logo} alt="ZiosTech Logo" />
            <div className="footer-container">
                {/* Footer Links */}
                <div className="footer-links-container">
                    <div className="footer-logo-description">
                        <p className="footer-description">
                            Ziostech Solutions was founded in 2024 by a unique, diverse, and creative team
                            brought together with the aim of crafting cutting-edge solutions for both mobile
                            and web applications.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Company</h3>
                        <ul id='footer-links'>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>All Services</li>
                            <li>Blogs</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Services</h3>
                        <ul id='footer-links'>
                            <li>Mobile App Development</li>
                            <li>Web Development</li>
                            <li>Cross-Platform Development</li>
                            <li>Enterprise App Development</li>
                            <li>Low Code Development</li>
                            <li>Technical Consulting Services</li>
                            <li>Business Intelligence Services</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Industries</h3>
                        <ul id='footer-links'>
                            <li>Health Care</li>
                            <li>ERP</li>
                            <li>E-commerce</li>
                            <li>Fintech</li>
                            <li>Mobility</li>
                            <li>SaaS</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Other Links</h3>
                        <ul id='footer-links'>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Divider and Social Icons */}
            <div className="footer-divider">
                {/* Newsletter */}
                <div className="footer-newsletter">
                    <h3>Subscribe to our Newsletter</h3>
                    <p>Join and stay informed about the latest trends.</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </div>


            </div>
            <hr className='footerLine'></hr>
            <p className="footer-copyright">
                Copyright © {new Date().getFullYear()} Ziostech Solutions Inc. All rights reserved.
            </p>

        </footer>
    );
};

export default FooterSection;
