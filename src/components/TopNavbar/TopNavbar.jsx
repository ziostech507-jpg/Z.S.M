import React, { useState } from 'react';
import ziostech_logo from '../../assets/images/ziostech_logo.png';
import './TopNavbar.css';
import ContactUs from '../ContactUsButton/ContactUs';
import { useNavigate } from 'react-router-dom';
import BlogPopUp from '../BlogPopUp/BlogPopUp'

const TopNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); //for blog pop up

  // for blog pop up 
  const handleBlogClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='topNavContainer'>
      <img className='ziostechLogo' src={ziostech_logo} loading='lazy' alt="ziostech logo" />
      <div className={`navBarLinks ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li onClick={() => { handleBlogClick(); setMenuOpen(false); }}>Blogs</li>
          <li onClick={() => {navigate('/faq');setMenuOpen(false)}}>FAQ</li>
          <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>
            <ContactUs buttonTitle="Contact Us" />
          </li>
        </ul>
      </div>
      <button className="menuToggleButton" onClick={toggleMenu}>
        ☰
      </button>
      {showPopup && <BlogPopUp closePopup={closePopup} />}
    </div>
  );
};

export default TopNavbar;
