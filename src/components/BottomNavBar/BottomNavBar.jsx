import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNavBar.css';
import HomeIcon from '../../assets/Icons/home-icon.png';
import AboutIcon from '../../assets/Icons/about-icon.png';
import ServiceIcon from '../../assets/Icons/service-icon.png';
import ProjectIcon from '../../assets/Icons/projects-icon.png';
import ProductsIcon from '../../assets/Icons/products-icon.png';
import ComingSoonPopup from '../BlogPopUp/BlogPopUp';
const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  const navItems = [
    { name: 'Home', route: '/', icon: HomeIcon },
    { name: 'About', route: '/about', icon: AboutIcon },
    { name: 'Services', route: '/services', icon: ServiceIcon },
    { name: 'Projects', route: '/projects', icon: ProjectIcon },
    { name: 'Products', route: '/products', icon: ProductsIcon },
  ];
  const handleItemClick = (item) => {
    if (item.route === '/products') {
      setShowPopup(true); // Show the popup for "Products"
    } else {
      navigate(item.route); // Navigate to other routes
    }
  };
  const toggleDropdown = (isOpen) => {
    setShowDropdown(isOpen);
  };
  return (
    // <div className="bottomNavBarContainer">
    //   <ul className='bottomNavBarItems'>
    //     {navItems.map((item) => (
    //       <li
    //         key={item.name}
    //         className={location.pathname === item.route ? 'active' : ''}
    //         onClick={() => navigate(item.route)}
    //       >
    //         <img src={item.icon} loading='lazy' alt={`${item.name} icon`} />
    //         <p>{item.name}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="bottomNavBarContainer">
      <ul className="bottomNavBarItems ">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`${location.pathname === item.route ? 'active' : ''} ${item.name === 'Services' ? 'dropup' : ''}`}

            onClick={() => handleItemClick(item)}
          // onMouseEnter={() => item.name === 'Services' && toggleDropdown(true)}
          // onMouseLeave={() => item.name === 'Services' && toggleDropdown(false)}
          >

            <img src={item.icon} loading="lazy" alt={`${item.name} icon`} />
            <p>{item.name}</p>

            {/* dropup */}
            {/* {item.name === 'Services' && showDropdown && (
              <ul class="dropup-content">
                <li>AIXpertSites</li>
                <li>Personal Software for Business</li>
                <li>App Development</li>
                <li>Web/App Upgradation</li>
                <li>Web Development</li>
                <li>AI/ML Projects</li>
                <li>Cyber Security</li>
              </ul>
            )} */}

          </li>
        ))}
      </ul>

      {showPopup && <ComingSoonPopup closePopup={() => setShowPopup(false)} />}
    </div>
  );
};

export default BottomNavBar;
