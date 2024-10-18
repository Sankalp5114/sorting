import React from 'react';
import './About.css';
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
        <br></br>
        <br></br>
        <h2 className="tech-stack-title">Tech Stack Used</h2>
        <p className="tech-stack-description">
          The application is built using modern web technologies including React for the frontend, CSS for styling, and JavaScript 
          for logic and interactivity.
        </p>
        <br></br>
        <br></br>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-cards">
            <div className="team-member">
              <img src="../components/images/sankalp.jpg" alt="Member 1" className="team-img"/>
              <h3>Sankalp Wani</h3>
              <p>TE INFT-A</p>
              <p>22101A0028</p>
            </div>
            <div className="team-member">
              <img src="/src/components/images/pratik.jpg" alt="Member 2" className="team-img"/>
              <h3>Pratik Sawant</h3>
              <p>TE INFT-A</p>
              <p>22101A0029</p>
            </div>
            <div className="team-member">
              <img src="/src/components/images/abhishek.png" alt="Member 3" className="team-img"/>
              <h3>Abhishek Pal</h3>
              <p>TE INFT-A</p>
              <p>22101A0067</p>
            </div>
          </div>
        </div>

        {/* <div className="contact-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-button">Submit</button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default About;
