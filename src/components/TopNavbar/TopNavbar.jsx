// import React, { useState } from 'react';
// import ziostech_logo from '../../assets/images/ziostech_logo.png';
// import './TopNavbar.css';
// import ContactUs from '../ContactUsButton/ContactUs';
// import { useNavigate } from 'react-router-dom';
// import BlogPopUp from '../BlogPopUp/BlogPopUp'

// const TopNavbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false); //for blog pop up

//   // for blog pop up
//   const handleBlogClick = () => {
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='topNavContainer'>
//       <img className='ziostechLogo' onClick={()=>navigate('/')} src={ziostech_logo} loading='lazy' alt="ziostech logo" />
//       <div className={`navBarLinks ${menuOpen ? 'show' : ''}`}>
//         <ul>
//           {/* <li onClick={() => { handleBlogClick(); setMenuOpen(false); }}>Blogs</li> */}
//          <li>Services 🔻</li>
//           <li onClick={() => {navigate('/faq');setMenuOpen(false)}}>FAQ</li>
//           <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>
//             <ContactUs buttonTitle="Contact Us" />
//           </li>
//         </ul>
//       </div>
//       <button className="menuToggleButton" onClick={toggleMenu}>
//         ☰
//       </button>
//       {showPopup && <BlogPopUp closePopup={closePopup} />}

//     </div>
//   );
// };

// // export default TopNavbar;
// import React, { useState } from 'react';
// import ziostech_logo from '../../assets/images/ziostech_logo.png';
// import './TopNavbar.css';
// import ContactUs from '../ContactUsButton/ContactUs';
// import { useNavigate } from 'react-router-dom';
// import ServicePopUp from './ServicePopUp';
// import { RiArrowDropDownLine } from "react-icons/ri";

// const TopNavbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showServicesPopup, setShowServicesPopup] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleServicesHover = (isHovering) => {
//     setShowServicesPopup(isHovering);
//   };

//   return (
//     <div className='topNavContainer'>
//       <img
//         className='ziostechLogo'
//         onClick={() => navigate('/')}
//         src={ziostech_logo}
//         loading='lazy'
//         alt="ziostech logo"
//       />
//       <div className={`navBarLinks ${menuOpen ? 'show' : ''}`}>
//         <ul>
//           <li id='serviceTopNavLink'
//             onMouseEnter={() => handleServicesHover(true)}
//             onMouseLeave={() => handleServicesHover(false)}
//           >
//             Services <RiArrowDropDownLine className='serviceDropDownIcon'/>
//           </li>
//           <li onClick={() => { navigate('/faq'); setMenuOpen(false); }}>FAQ</li>
//           <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>
//             <ContactUs buttonTitle="Contact Us" />
//           </li>
//         </ul>
//       </div>
//       <button className="menuToggleButton" onClick={toggleMenu}>
//         ☰
//       </button>
//       {/* Render ServicePopUp outside the TopNavbar */}
//       {showServicesPopup && (
//         <div
//           className="servicePopUpWrapper"
//           onMouseEnter={() => handleServicesHover(true)}
//           onMouseLeave={() => handleServicesHover(false)}
//         >
//           <ServicePopUp />
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopNavbar;
// import React, { useState } from 'react';
// import ziostech_logo from '../../assets/images/ziostech_logo.png';
// import './TopNavbar.css';
// import ContactUs from '../ContactUsButton/ContactUs';
// import { useNavigate } from 'react-router-dom';
// import { RiArrowDropDownLine } from "react-icons/ri";

// const TopNavbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false); // Controls menu toggle
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false); // Controls dropdown for small screens

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     setShowServicesDropdown(false); // Close services dropdown when toggling menu
//   };

//   const toggleServicesDropdown = () => {
//     setShowServicesDropdown(!showServicesDropdown); // Toggle the dropdown
//   };

//   return (
//     <div className="topNavContainer">
//       {/* Logo */}
//       <img
//         className="ziostechLogo"
//         onClick={() => navigate('/')}
//         src={ziostech_logo}
//         loading="lazy"
//         alt="ziostech logo"
//       />

//       {/* Navigation Links */}
//       <div className={`navBarLinks ${menuOpen ? 'show' : ''}`}>
//         <ul>
//           {/* Services */}
//           <li
//             id="serviceTopNavLink"
//             onClick={toggleServicesDropdown} // For small screens
//           >
//             Services <RiArrowDropDownLine className="serviceDropDownIcon" />
//           </li>

//           {/* Small screen dropdown */}
//           {menuOpen && showServicesDropdown && (
//             <ul className="servicesDropdownMenu">
//               <li onClick={() => { navigate('/service1'); setMenuOpen(false); }}>Service 1</li>
//               <li onClick={() => { navigate('/service2'); setMenuOpen(false); }}>Service 2</li>
//               <li onClick={() => { navigate('/service3'); setMenuOpen(false); }}>Service 3</li>
//             </ul>
//           )}

//           {/* Other Links */}
//           <li onClick={() => { navigate('/faq'); setMenuOpen(false); }}>FAQ</li>
//           <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>
//             <ContactUs buttonTitle="Contact Us" />
//           </li>
//         </ul>
//       </div>

//       {/* Menu Toggle Button */}
//       <button className="menuToggleButton" onClick={toggleMenu}>
//         ☰
//       </button>
//     </div>
//   );
// };

// export default TopNavbar;

// import React, { useState,useEffect } from 'react';
// import ziostech_logo from '../../assets/images/ziostech_logo.png';
// import './TopNavbar.css';
// import ContactUs from '../ContactUsButton/ContactUs';
// import { useNavigate } from 'react-router-dom';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import ServicePopUp from './ServicePopUp'; // Import the popup component

// const TopNavbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false); // Controls menu toggle
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false); // Dropdown for small screens
//   const [showServicesPopup, setShowServicesPopup] = useState(false); // Popup for large screens
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setMenuOpen(false); // Close menu for large screens
//         setShowServicesDropdown(false); // Hide dropdown for large screens
//       }
//     };

//     window.addEventListener('resize', handleResize); // Add resize listener
//     return () => {
//       window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     setShowServicesDropdown(false); // Close dropdown when toggling menu
//   };

//   const toggleServicesDropdown = () => {
//     setShowServicesDropdown(!showServicesDropdown); // Toggle small screen dropdown
//   };

//   return (
//     <div className="topNavContainer">
//       {/* Logo */}
//       <img
//         className="ziostechLogo"
//         onClick={() => navigate('/')}
//         src={ziostech_logo}
//         loading="lazy"
//         alt="ziostech logo"
//       />

//       {/* Navigation Links */}
//       <div className={`navBarLinks ${menuOpen ? 'show' : ''}`}>
//         <ul>
//           {/* Services */}
//           <li
//             id="serviceTopNavLink"
//             onMouseEnter={() => !menuOpen && setShowServicesPopup(true)} // Show popup on hover (large screens)
//             onMouseLeave={() => setShowServicesPopup(false)} // Hide popup on mouse leave
//             onClick={()=>{toggleServicesDropdown();navigate('/services');navigate('/services')}} // For small screens
//           >
//             Services
//              <RiArrowDropDownLine className="serviceDropDownIcon" />
//           </li>

//           {/* Small screen dropdown */}
//           {menuOpen && showServicesDropdown && (
//             <ul className="servicesDropdownMenu">
//               <li onClick={() => { navigate('/service1'); setMenuOpen(false); }}>Service 1</li>
//               <li onClick={() => { navigate('/service2'); setMenuOpen(false); }}>Service 2</li>
//               <li onClick={() => { navigate('/service3'); setMenuOpen(false); }}>Service 3</li>
//             </ul>
//           )}

//           {/* Other Links */}
//           <li onClick={() => { navigate('/faq'); setMenuOpen(false); }}>FAQ</li>
//           <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>
//             <ContactUs buttonTitle="Contact Us" />
//           </li>
//         </ul>
//       </div>

//       {/* Large Screen Popup */}
//       {!menuOpen && showServicesPopup && (
//         <div
//           className="servicePopUpWrapper"
//           onMouseEnter={() => setShowServicesPopup(true)} // Keep popup open while hovering
//           onMouseLeave={() => setShowServicesPopup(false)} // Close popup on mouse leave
//         >
//           <ServicePopUp />
//         </div>
//       )}

//       {/* Menu Toggle Button */}
//       <button className="menuToggleButton" onClick={toggleMenu}>
//         ☰
//       </button>
//     </div>
//   );
// };

// export default TopNavbar;

//   import React, { useState, useEffect } from 'react';
// import ziostech_logo from '../../assets/images/ziostech_logo.png';
// import './TopNavbar.css';
// import ContactUs from '../ContactUsButton/ContactUs';
// import { useNavigate } from 'react-router-dom';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import ServicePopUp from './ServicePopUp'; // Import the popup component

// const TopNavbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false); // Controls menu toggle
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false); // Dropdown for small screens
//   const [showServicesPopup, setShowServicesPopup] = useState(false); // Popup for large screens

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setMenuOpen(false); // Close menu for large screens
//         setShowServicesDropdown(false); // Hide dropdown for large screens
//       }
//     };

//     window.addEventListener('resize', handleResize); // Add resize listener
//     return () => {
//       window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     setShowServicesDropdown(false); // Close dropdown when toggling menu
//   };

//   const toggleServicesDropdown = () => {
//     setShowServicesDropdown(!showServicesDropdown); // Toggle small screen dropdown
//   };

//   return (
//     <div className="topNavContainer">
//       {/* Logo */}
//       <img
//         className="ziostechLogo"
//         onClick={() => navigate('/')}
//         src={ziostech_logo}
//         loading="lazy"
//         alt="ziostech logo"
//       />

//       {/* Navigation Links */}
//       <div className={`navBarLinks ${menuOpen ? 'show' : ''}`}>
//         <ul>
//           {/* Services */}
//           <li
//             id="serviceTopNavLink"
//             onMouseEnter={() => !menuOpen && setShowServicesPopup(true)} // Show popup on hover (large screens)
//             onMouseLeave={() => setShowServicesPopup(false)} // Hide popup on mouse leave
//           >
//             <div
//               className="serviceItem"
//               onClick={() => { navigate('/services'); setShowServicesPopup(false); }} // Redirect on click
//             >
//               Services
//             </div>
//             <RiArrowDropDownLine
//               className="serviceDropDownIcon"
//               onMouseEnter={() => !menuOpen && setShowServicesPopup(true)} // Show popup on hover (large screens)
//               onMouseLeave={() => setShowServicesPopup(false)} // Hide popup on mouse leave
//               onClick={() => { navigate('/services'); setShowServicesPopup(false); }} // Redirect on click
//             />
//           </li>

//           {/* Small screen dropdown */}
//           {menuOpen && showServicesDropdown && (
//             <ul className="servicesDropdownMenu">
//               <li onClick={() => { navigate('/service1'); setMenuOpen(false); }}>Service 1</li>
//               <li onClick={() => { navigate('/service2'); setMenuOpen(false); }}>Service 2</li>
//               <li onClick={() => { navigate('/service3'); setMenuOpen(false); }}>Service 3</li>
//             </ul>
//           )}

//           {/* Other Links */}
//           <li onClick={() => { navigate('/faq'); setMenuOpen(false); }}>FAQ</li>
//           <li onClick={() => { navigate('/contact'); setMenuOpen(false); }}>
//             <ContactUs buttonTitle="Contact Us" />
//           </li>
//         </ul>
//       </div>

//       {/* Large Screen Popup */}
//       {!menuOpen && showServicesPopup && (
//         <div
//           className="servicePopUpWrapper"
//           onMouseEnter={() => setShowServicesPopup(true)} // Keep popup open while hovering
//           onMouseLeave={() => setShowServicesPopup(false)} // Close popup on mouse leave
//         >
//           <ServicePopUp />
//         </div>
//       )}

//       {/* Menu Toggle Button */}
//       <button className="menuToggleButton" onClick={toggleMenu}>
//         ☰
//       </button>
//     </div>
//   );
// };

// export default TopNavbar;

import React, { useState, useEffect, useRef } from "react";
import ziostech_logo from "../../assets/images/ziostech_logo.png";
import "./TopNavbar.css";
import ContactUs from "../ContactUsButton/ContactUs";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import ServiceDropDown from "./ServiceDropDown";
// import { AiOutlineCloseCircle } from "react-icons/ai"; // Importing Close Circle Icon
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const TopNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showServicesPopup, setShowServicesPopup] = useState(false);

  // References for menu and popup
  const menuRef = useRef(null);

  useEffect(() => {
    // let lastScrollY = window.scrollY;
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setShowServicesDropdown(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setShowServicesDropdown(false);
        setShowServicesPopup(false);
      }
    };

    // const handleScroll = () => {
    //   setMenuOpen(false);
    //   setShowServicesPopup(false);
    // };
    // const handleScroll = () => {
    //   const currentScrollY = window.scrollY;
    //   if (Math.abs(currentScrollY - lastScrollY) > 2000) { // Close only after scrolling 50px
    //     setMenuOpen(false);
    //     setShowServicesPopup(false);
    //   }
    //   lastScrollY = currentScrollY;
    // };
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setShowServicesDropdown(false);
    setShowServicesPopup(false);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown((prev) => !prev);
  };

  const toggleServicesPopup = (e) => {
    e.preventDefault();
    setShowServicesPopup((prev) => !prev);
  };

  return (
    <div className="topNavContainer" ref={menuRef}>
      {/* Logo */}
      <img
        className="ziostechLogo"
        onClick={() => navigate("/")}
        src={ziostech_logo}
        loading="lazy"
        alt="ziostech logo"
      />

      {/* Navigation Links */}
      <div className={`navBarLinks ${menuOpen ? "show" : ""}`}>
        <ul>
          {/* Services */}
          <li
            id="serviceTopNavLink"
            onMouseEnter={() => !menuOpen && setShowServicesPopup(true)}
            onMouseLeave={() => setShowServicesPopup(false)}
          >
            <div className="serviceItem" onClick={() => navigate("/services")}>
              Services
            </div>
            {menuOpen ? (
              <CiCirclePlus
                className="serviceDropDownIcon servicePlusIcon"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleServicesDropdown();
                }}
              />
            ) : (
              <RiArrowDropDownLine
                className="serviceDropDownIcon"
                id="serviceDropDownIcon"
                onMouseEnter={() => !menuOpen && setShowServicesPopup(true)}
                onMouseLeave={() => setShowServicesPopup(false)}
                onClick={toggleServicesPopup}
              />
            )}
          </li>

          {/* Small screen dropdown */}
          {menuOpen && showServicesDropdown && (
            <ul className="servicesDropdownMenu">
            
              <li
                onClick={() => {
                  navigate("/ai-ml-projects");
                  setMenuOpen(false);
                }}
              >
                AI/ML
              </li>
              <li
                onClick={() => {
                  navigate("/aixpersites");
                  setMenuOpen(false);
                }}
              >
                AIXpertSites
              </li>
              <li
                onClick={() => {
                  navigate("/personal-software");
                  setMenuOpen(false);
                }}
              >
                Personal Software for Business
              </li>
              <li
                onClick={() => {
                  navigate("/web-app-upgradation");
                  setMenuOpen(false);
                }}
              >
                Web/App Upgradation
              </li>
              <li
                onClick={() => {
                  navigate("/app-developement");
                  setMenuOpen(false);
                }}
              >
                App Development
              </li>
              <li
                onClick={() => {
                  navigate("/web-developement");
                  setMenuOpen(false);
                }}
              >
                Web Development
              </li>
              <li
                onClick={() => {
                  navigate("/data-security");
                  setMenuOpen(false);
                }}
              >
                Data Security and Protection
              </li>
              <li
                onClick={() => {
                  navigate("/cyber-security");
                  setMenuOpen(false);
                }}
              >
                Cyber Security
              </li>
            </ul>
          )}

          {/* Other Links */}
          <li
            onClick={() => {
              navigate("/faq");
              setMenuOpen(false);
            }}
          >
            FAQ
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
          >
            <ContactUs buttonTitle="Contact Us" className="contact-Us-btn" />
          </li>
        </ul>
      </div>

      {/* Large Screen Popup */}
      {!menuOpen && showServicesPopup && (
        <div
          className="servicePopUpWrapper"
          onMouseEnter={() => setShowServicesPopup(true)}
          onMouseLeave={() => setShowServicesPopup(false)}
        >
          <ServiceDropDown />
        </div>
      )}

      {/* Menu Toggle Button */}
      {/* <button className="menuToggleButton" onClick={toggleMenu}>
        ☰
      </button> */}
      <button
      //  className="menuToggleButton" onClick={toggleMenu}
      className={`menuToggleButton ${menuOpen ? "rotate" : ""}`}
      onClick={toggleMenu}
       >
        {menuOpen ? (
          <RxCross2 
          // className="closeMenuIcon"
          className={`closeMenuIcon ${menuOpen ? "fade" : ""}`}
           />
        ) : (
          // "☰"
          <HiMiniBars3CenterLeft />
        )}
      </button>
    </div>
  );
};

export default TopNavbar;
