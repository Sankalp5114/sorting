import React from 'react';
import './About.css';
import sankalp from '../components/images/sankalp.jpg';
import pratik from '../components/images/pratik.jpg';
import abhishek from '../components/images/abhishek.jpg';
import Navbar from '../components/Navbar';


const About = () => {
  return (
    <div className='about-background'>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Our Project</h1>
        <p className="about-description">
          This project is an algorithm visualizer that helps users understand complex algorithms through interactive visualizations.
          It covers various sorting and searching algorithms with clear step-by-step animations. We aim to enhance learning by
          offering a dynamic, hands-on experience.
        </p>

        <h2 className="tech-stack-title">Tech Stack Used</h2>
        <p className="tech-stack-description">
          The application is built using modern web technologies including React for the frontend, CSS for styling, and JavaScript 
          for logic and interactivity.
        </p>

        <div className="team-section">
          <h2>Meet Our Team</h2><br/>
          <div className="team-cards">
            <div className="team-member">
              <img src={sankalp} alt="Member 1" className="team-img"/>
              <h3>Sankalp Wani</h3>
              <p>TE INFT-A</p>
              <p>22101A0028</p>
            </div>
            <div className="team-member">
              <img src={pratik} alt="Member 2" className="team-img"/>
              <h3>Pratik Sawant</h3>
              <p>TE INFT-A</p>
              <p>22101A0029</p>
            </div>
            <div className="team-member">
              <img src={abhishek} alt="Member 3" className="team-img"/>
              <h3>Abhishek Pal</h3>
              <p>TE INFT-A</p>
              <p>22101A0067</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;