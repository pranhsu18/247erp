import React from 'react'
import "./Home.css";

export default function Home() {
  return (
    <div className='home_page' >
      <div className='Heading'>
        <h1 className='main_heading'>Solutions </h1>
      </div>

      <div className='solution_box'>
          <img src="https://247erp.net/assets/247erp/img/img6.jpg" alt="ERP Solutions" />
        <div className='heading2_box'>
          <h2 className='Heading2'> Software Project Management</h2>
          <ul className='home_content'>
            <li>Global leader of software development outsourcing 
              <br /> 
              <div className='image_div' > <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
              </div>
            </li>
            <br />
            <li>Global leader of software development outsourcing 
              <br /> 
              <div className='image_div' > <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}
