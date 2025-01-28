import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ServiceDropDown.css'
const ServicePopUp = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/about')
    }
  return (
    <div className='servicePopUpContainer'>
      <ul>
      <li onClick={handleClick}> AI/ML</li>
        <li  onClick={handleClick}>AIXpertSites
        </li>
        <li  onClick={handleClick}>Personal Software for Business
</li>
        <li  onClick={handleClick}>Web/App Upgradation

</li>
        <li  onClick={handleClick}>Web/App Upgradation

</li>
        <li  onClick={handleClick}>Web Development

</li>
        <li  onClick={handleClick}>Web Development

</li>
        <li  onClick={handleClick}>Cyber Security



</li>
        </ul>
    </div>
  )
}

export default ServicePopUp
