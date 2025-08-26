
import React from 'react'
import "./About.css"

export default function About() {
  return (
    <>
    
     <div className="HeadingPartOfHome">
        <h2 className="headings" >About Us</h2>
      </div>
    
      <div className="wrapper">
        {/* Mission Card */}
        <div className="card-info">
          <div className="fronttext">
            <div className="frontheading">
              <div className="icon">🎯</div>
              <h2 className="animated-heading">Our Mission</h2>
            </div>
          </div>
          <div className="backtext">
            <div className="abouttext">
              <p>
                Our mission is to deliver cutting-edge ERP and digital media
                solutions that empower businesses worldwide. We aim to streamline
                operations, boost efficiency, and support sustainable growth for
                enterprises of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="card-info">
          <div className="fronttext">
            <div className="frontheading">
              <div className="icon">👁️</div>
              <h2 className="animated-heading">Our Vision</h2>
            </div>
          </div>
          <div className="backtext">
            <div className="abouttext">
              <p>
                Our vision is to become a global leader in ERP and media
                services, driving digital transformation with innovation,
                reliability, and customer-centric solutions for the future.
              </p>
            </div>
          </div>
        </div>
      
    </div>
  </>
  )
}
