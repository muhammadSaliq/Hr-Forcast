import React from 'react';
import './about.css'; // Create this CSS file
import hr from '../../assets/hr.jpg';
import vision from '../../assets/vision.jpg';
import Navbars from '../../components/navbar';


const AboutUs = () => {
  return (
    <>    
    <Navbars/>
    <div className="about-us">
      <div className="vision">
        {/* <img src="hr.jpg" alt="Vision" className="image" /> */}
        {/* <img src={hr} alt=""/> */}
        
        <div className="text">
          <h2>Vision</h2>
          <p>Our vision is to revolutionize human resource management by developing an innovative and data-driven HR management system. We aim to empower organizations to proactively address employee attrition, optimize workforce planning, and foster a more engaged and satisfied workforce. Our system will utilize predictive analytics and real-time data monitoring to provide actionable insights, helping organizations retain top talent and stay competitive in the ever-evolving business landscape.</p>
          <p>The agenda extends to creating a workplace where talent is nurtured, and employees feel valued. By harnessing the power of data and predictive analytics, we aim to transform HR into a strategic partner that drives organizational success, fosters innovation, and ensures a brighter future for businesses and their workforce.</p>
          <img src={hr} alt="Mission" className="imagehr" />
        </div>
      </div>
      <div className="mission">
        <div className="text">
          <h2>Mission</h2>
          <p>Our mission is to create a comprehensive HR management solution that combines the power of data analysis and machine learning to predict employee attrition accurately. We are committed to streamlining HR operations, offering insights into workforce dynamics, and recommending retention strategies. By providing HR professionals with the tools they need to make informed decisions, we aim to enhance employee satisfaction, improve organizational efficiency, and contribute to the success and growth of businesses.
<p>We strive to make the workplace a better and more rewarding environment for both employees and employers by delivering a system that understands, predicts, and supports the evolving needs of the workforce.</p>
</p>
        </div>
        <img src={vision} alt="Mission" className="image" />
      </div>
    </div>
    </>

  );
};

export default AboutUs;
