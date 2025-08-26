
import React from "react";
import "./Home.css";
import About from "./About";

export default function Home() {
  return (
    <div className="home_page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Global Enterprise Solutions</h1>
          <p>
            Global Enterprise Solutions provides end-to-end technology and business solutions that empower organizations to grow and succeed. Our services include ERP implementations and support, software development outsourcing, multimedia design, web development, hosting, and AI-driven analytics. With expertise in content development, video editing, and teleservices, we deliver innovative, reliable, and impactful results to clients across the United States, Ireland, and Australia.
          </p>
        </div>

        <div className="hero-video">
          <video
            src="src/assets/Global Enterprise Solutions New (1).mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="HeadingPartOfHome">
        <h2 className="headings" >Our Solutions</h2>
      </div>
      
      <div className="solutionsection">

        <div className="frontdiv">
        <div className="imagesection">
          <img src="src\assets\Image1.png" alt="erp solutions" />
        </div>

        <div className="headingtextSection">
          <h2 className="animated-heading">ERP Implementation & Support</h2>
          <p>
            We deliver end-to-end ERP solutions that streamline processes, integrate workflows, and improve decision-making. From setup and customization to ongoing support, our ERP expertise ensures your business runs efficiently, with reduced downtime and greater productivity. Our tailored ERP solutions adapt to your industry needs and scale as your business grows.
          </p>
        </div>
      </div>

      <div className="frontdiv1">
        <div className="imagesection">
          <img src="src\assets\Image2.png" alt="erp solutions" />
        </div>

        <div className="headingtextSection">
          <h2 className="animated-heading">Digital & Multimedia Solutions</h2>
          <p>
            We create engaging multimedia and digital content for businesses and media companies. From print-ready designs to interactive digital experiences, our team brings creativity and innovation together. Services include image processing, video editing, and content development that elevate your brand presence across all platforms—ensuring consistency, impact, and audience engagement.
          </p>
        </div>
      </div>

      <div className="frontdiv">
        <div className="imagesection">
          <img src="src/assets/ERP IMAGE1.png" alt="erp solutions" />
        </div>

        <div className="headingtextSection">
          <h2 className="animated-heading">Software Development & Project Management</h2>
          <p>
            Our experts design, develop, and manage customized software solutions tailored to your business requirements. Using proven project management frameworks, we deliver on time, within budget, and with unmatched quality. Whether it’s a new build or scaling an existing system, we ensure seamless functionality that drives your business goals forward.
          </p>
        </div>
      </div>

      <div className="frontdiv1">
        <div className="imagesection">
          <img src="src/assets/ERP IMAGE1.png" alt="erp solutions" />
        </div>

        <div className="headingtextSection">
          <h2 className="animated-heading">Web Design & Hosting</h2>
          <p>
            We specialize in stunning, user-friendly websites backed by secure and reliable hosting solutions. From sleek designs to seamless navigation, we craft digital experiences that connect with your audience. With optimized performance, mobile responsiveness, and strong hosting infrastructure, your website remains fast, secure, and always online—ready to impress your visitors.
          </p>
        </div>
      </div>

      <div className="frontdiv">
        <div className="imagesection">
          <img src="src/assets/ERP IMAGE1.png" alt="erp solutions" />
        </div>
        <div className="headingtextSection">
          <h2 className="animated-heading">Server & Desktop Support</h2>
          <p>
            Our comprehensive IT infrastructure support keeps your systems running smoothly, every day. From server monitoring and desktop troubleshooting to regular maintenance and upgrades, we handle it all. With proactive solutions and expert technical assistance, we minimize downtime and maximize reliability—giving your team the confidence to work without interruptions.
          </p>
        </div>
      </div>
      <div className="frontdiv1">
        <div className="imagesection">
          <img src="src/assets/ERP IMAGE1.png" alt="erp solutions" />
        </div>
        <div className="headingtextSection">
          <h2 className="animated-heading">Teleservices & Customer Support</h2>
          <p>
            We provide end-to-end outsourcing solutions that enhance customer satisfaction and business efficiency. From teleservices and call handling to complete customer support management, our services ensure timely responses and personalized care. With our trained professionals and advanced systems, you can deliver world-class customer experiences while focusing on your core business priorities.
          </p>
        </div>
      </div>


      </div>
      <About />




      
    </div>
  );
}
