import React from 'react'
import "./Home.css";
import Contact from './Contact';


export default function Home() {

  return (
    
    <div className='home_page' >
     
      
      <div className='Heading'>
        <h1 className='main_heading'>Solutions</h1>
      </div>
  


      <div className='mainbox'>

        <div className='box1'>
        
        <img src="https://247erp.net/assets/247erp/img/img2.jpg" alt="Grow Your Business Now" />
        <br />
        <p>At 247erp.net, we empower businesses with innovative ERP and media solutions designed to drive growth, efficiency, and long-term success. With decades of proven expertise since 1995, our mission is to simplify processes, enhance productivity, and help organizations achieve their goals faster in today’s competitive digital era.</p>
        </div>

      <div className='box2'>
        <img className='box2_img' src="https://247erp.net/assets/247erp/img/img6.jpg" alt="ERP Solutions" />
        <div className='innerbox2'>
          <h2 >Software Project Management</h2>
          <div className='inner_headings' >
            <h4  > <a className='inner_subheadings' href="">Digital Solutions, Web and Print Solutions</a> </h4>
            <div  className='innerbox2div'> <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
            </div>
            <br />
            <h4  > <a className='inner_subheadings' href="">ERP Implementation and Support</a> </h4>
            <div  className='innerbox2div'> <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
            </div>
          </div>
        </div>
      </div>

      <div className='box3'>
        <img className='box3_img' src="https://247erp.net/assets/247erp/img/Img4.jpg" alt="ERP Solutions" />
        <div className='innerbox2'>
          <h2 >Compelete Software and ERP Solutions </h2>
          <div className='inner_headings' >
            <h4  > <a className='inner_subheadings' href="">Media Content Development, Multimedia, Image Processing, etc.</a> </h4>
            <div  className='innerbox2div'> <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
            </div>
            <br />
            <h4  > <a className='inner_subheadings' href="">Server & Desktop Support, Video Editing, Teleservices, etc.</a> </h4>
            <div  className='innerbox2div'> <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
            </div>
          </div>
        </div>
      </div>

      <div className='box4'>
        <img className='box4_img' src="https://247erp.net/assets/247erp/img/Img4.jpg" alt="ERP Solutions" />
        <div className='innerbox2'>
          <h2 >Compelete Software and ERP Solutions </h2>
          <div className='inner_headings' >
            <h4  > <a className='inner_subheadings' href="">Media Content Development, Multimedia, Image Processing, etc.</a> </h4>
            <div  className='innerbox2div'> <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
            </div>
            <br />
            <h4  > <a className='inner_subheadings' href="">Server & Desktop Support, Video Editing, Teleservices, etc.</a> </h4>
            <div  className='innerbox2div'> <img className="imageofericsir" src="https://247erp.net/files/eric.jpeg" alt="Eric Sir Image" /> <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      
  
  )
}
