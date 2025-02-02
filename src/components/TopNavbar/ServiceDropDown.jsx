import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ServiceDropDown.css'
const ServicePopUp = () => {
    const navigate=useNavigate();
  return (
    <div className='servicePopUpContainer'>
      <ul>
      <li onClick={()=>navigate('/clouds')}>Clouds Services</li>
        <li  onClick={()=>navigate('/testing')}>Testing Services
        </li>
        <li  onClick={()=>navigate('/containerization')}>Containerisation Tools</li>
        <li  onClick={()=>navigate('/uiux')}>UIUX Services
</li>
        <li  onClick={()=>navigate('/app-developement')}>App Development

</li>
        <li  onClick={()=>navigate('/web-developement')}>Web Development

</li>
        <li  onClick={()=>navigate('/big-data')}>Big Data
</li>
        <li  onClick={()=>navigate('/data-visualisation')}>Data Visualisation
</li>
        <li  onClick={()=>navigate('/dataOps')}>DataOps
</li>
        <li  onClick={()=>navigate('/smart-bot')}>Smart Bot
</li>
        </ul>
    </div>
  )
}

export default ServicePopUp
