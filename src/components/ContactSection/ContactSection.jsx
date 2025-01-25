import React from 'react';
import './ContactSection.css';
import ContactUsGif from '../../assets/images/ContactUs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
    return (
        <div className="contact-us">
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col left-column">
                        <h2>Let's Start a Project</h2>
                        <p>Our team is ready to collaborate and create something extraordinary together. Contact us now!</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDescription">Short Description of Your Project</label>
                                <textarea id="projectDescription" rows="4"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>

                    {/* Right Column */}
                    <div className="col right-column">
                        <img src={ContactUsGif} alt="Project GIF" className="contactgif" />
                        <h2>Contact Us</h2>
                        <p>Tell us about your project...
                            We'd love to hear about the project you're working on.</p>
                        <ul>
                            <li>
                                <FontAwesomeIcon className='contact-icon' icon={faPhone} /> +91 7054464875
                            </li>
                            <li>
                                <FontAwesomeIcon className='contact-icon' icon={faWhatsapp} /> +91 9335141563
                            </li>
                            <li>
                                <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /> ziostechsolutions@gmail.com
                            </li>
                            <li>
                                <FontAwesomeIcon className='contact-icon' icon={faLocationDot} /> Sudarshan Society Vinayakpur, Kanpur 208024.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
