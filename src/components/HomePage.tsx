import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <style>{`
        body {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #36393f;
          color: #333;
        }
        .header {
          background-color: #0000;
          color: #fff;
          padding: 24px 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Space Grotesk',sans-serif;
        }
        .header img {
          height: 65px;
          width: 69px;
        }
        .header .menu {
          display: flex;
          gap: 20px;
        }
        .header .menu a {
          color: #fff;
          text-decoration: none;
          font-size: 1em;
          font-weight: bold;
          padding: 10px 12px;
          background: linear-gradient(45deg, #36393f,#36393f);
          border-radius: 5px;
          transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow:hidden;
        }
          .header .menu a:hover {
          transform: scale(1.1) rotate(-2deg); /* Scale up and rotate slightly */
          background: linear-gradient(45deg, #36393f, #36393f); /* Reverse gradient */
          box-shadow: 0 6px 15px #805ad5; /* Glowing shadow ---also can try this rgba(255, 105, 180, 0.5)*/
        }
        .header .menu a:active {
          animation: bounce 0.3s ease;
        }
        @keyframes bounce {
          0% {
            transform: scale(1.1) rotate(-2deg);
          }
          50% {
            transform: scale(0.9) rotate(2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        
        .main-banner {
          background-color: #805ad5;
          color: #fff;
          text-align: center;
          padding: 50px 20px;
        }
        .main-banner h1 {
          font-size: 2em;
          margin: 0;
        }
        .main-banner p {
          font-size: 1.2em;
        }
      .main-banner .cta-button {
    background: linear-gradient(45deg, #6340b3, #000); /* Gradient background */
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, background-color 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.main-banner .cta-button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transform: translateX(-50%) scaleX(0); /* Initially hidden */
    transform-origin: center;
    transition: transform 0.3s ease; /* Animated underline */
}

.main-banner .cta-button:hover {
    transform: scale(1.05); /* Enlarges button on hover */
}

.main-banner .cta-button:hover::after {
    transform: translateX(-50%) scaleX(1); /* Expands underline on hover */
}

        .content {
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .content .section {
          margin-bottom: 40px;
          flex: 1 1 calc(25%-20px); /*here we adjust width of each section*/
        }
        .content .section img {
          width: 100%;
          height: auto;
        }
        .content .section h2 {
          font-size: 1.5em;
          margin: 20px 0 10px;
        }
        .content .section p {
          font-size: 1em;
          margin: 0 0 10px;
        }
      .content .section .cta-button {
    background: linear-gradient(45deg, #9b59b6, #8e44ad); /* Purplish gradient background */
    color: #fff;  /* Text color inside button */
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, background-color 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Shadow effect */
    border: none; /* Removes default border */
}

.content .section .cta-button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 3px;
    background-color: #fff; /* White underline */
    transform: translateX(-50%) scaleX(1); /* Initially hidden */
    transform-origin: center;
    transition: transform 0.9s ease; /* Animated underline */
}

.content .section .cta-button:hover {
    transform: scale(1.05) rotate(3deg); /* Enlarges and slightly rotates the button */
    background: linear-gradient(45deg, #8e44ad, #9b59b6); /* Slight color change on hover */
    animation: pulse 0.6s infinite; /* Adds a pulsing effect */
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3); /* Enhances shadow for a glowing effect */
}

/* Define the pulse animation */
@keyframes pulse {
    0%, 100% {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Original shadow */
    }
    50% {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Enhanced shadow at pulse peak */
    }
}


.content .section .cta-button:hover::after {
    transform: translateX(-50%) scaleX(1); /* Expands underline on hover */
}

        .footer {
          background-color: #36393f;
          color: #fff;
          text-align: center;
          padding: 5px;
        }
        .footer .social-icons {
          margin: 20px 0;
        }
        .footer .social-icons a {
          color: #fff;
          margin: 0 10px;
          text-decoration: none;
          font-size: 1.5em;
        }
        .footer .footer-content {
          margin: 20px 0;
        }
        .footer .footer-content p {
          margin: 5px 0;
        }
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
          }
          .header .menu {
            flex-direction: column;
            gap: 10px;
          }
          .main-banner h1 {
            font-size: 1.5em;
          }
          .main-banner p {
            font-size: 1em;
          }
          .content .section h2 {
            font-size: 1.2em;
          }
          .content .section p {
            font-size: 0.9em;
          }
        }
      `}</style>
      <div>
      <div className="header">
        <img alt="Logo" src="/Nexus-logo.jpg" />
        <div className="menu">
          <Link to="/HomePage">Home</Link>
          <Link to="/dashboard">Discussion</Link> {/* Matches your route for Dashboard */}
          <Link to="/mentorship">Mentoring</Link>
          <Link to="/about">About Us</Link> {/* Matches your route for AboutUs */}
        </div>
      </div>
      <div className="main-banner">
        <h1>Welcome to Nexus – Where Freelancers Connect and Grow!</h1>
        <p>Join a vibrant community of freelancers ready to collaborate, share insights, and support each other’s journey.<br></br> Dive in, make connections, and unlock new possibilities with Nexus!</p>
        <a className="cta-button" href="/Dashboard">Go to Discussions</a>
        
      </div>
      <div className="content">
        {/* Section 1 - it is about finding friends/peers among users- must be directed to "find Friends" section*/}
        <div className="section">
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" style={{ filter: 'invert(0)' }} />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">Connect & Collaborate with Peers</h2>
                <p className="dark:text-gray-800">Expand your network by connecting with freelancers from diverse fields. Discuss ideas, find collaborators, and work together to make projects thrive!.</p>
              </div>
              <button
  type="button"
  onClick={() => navigate('/find-friends')}
  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:from-purple-800 hover:to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
>
  
  Networking made easy — Nexus brings talent together
</button>

            </div>
          </div>
        </div>
        {/* Section 2-it is about finding mentors to level up skills-must be directed to "Mentorship" section  */}
        <div className="section">
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" style={{ filter: 'invert(0)' }} />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">Exclusive Resources & Tips</h2>
                <p className="dark:text-gray-800">Access a wealth of resources, curated just for freelancers. From productivity hacks to platform guides, get insights that help you succeed.</p>
              </div>
                <button
  type="button"
  onClick={() => navigate('/mentorship')}
  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:from-purple-800 hover:to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
>Level up your skills with expert knowledge</button>
            </div>
          </div>
        </div>
        {/* Section 3 this is about joining the community hence- must be directed to "Community forum/ discussion page" */}
<div className="section">
  <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" style={{ filter: 'invert(0)' }} />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">Get Inspired by Success Stories</h2>
        <p className="dark:text-gray-800">Read real stories from freelancers who made it big with Nexus. See how collaboration and community can transform your journey.</p>
      </div>
      <button
  type="button"
  onClick={() => navigate('/dashboard')}
  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:from-purple-800 hover:to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
>Join the success — be part of the community where dreams are built.</button>
    </div>
  </div>
</div>
{/* Section 4 - it just describes about Us hence- to be directed to "about us" page*/}
<div className="section">
  <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" style={{ filter: 'invert(0)' }} />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">Built for Freelancers, By Freelancers</h2>
        <p className="dark:text-gray-800">Nexus is crafted with freelancer needs in mind, offering a platform for collaboration, support, and growth tailored to you.</p>
      </div>
      <button
  type="button"
  onClick={() => navigate('/about')}
  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:from-purple-800 hover:to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
>Experience a platform made for your career.</button>
    </div>
  </div>
</div>
</div>
<div className="relative">
      <h1>Welcome to the HomePage</h1>
      {/* Other components/content */}
      
      {/* Include Chatbot */}
      <Chatbot />
    </div>
{/* Footer */}
<div className="footer">
  <p>© 2024 The Nexus Community for Freelancers. All rights reserved.</p>
  <div className="social-icons">
    <a href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-linkedin-in"></i></a>
  </div>
  <div className="footer-content">
    <p>Contact us: info@nexus.com</p>
    <p>Phone: 000000007</p>
    <p>Address: 123 Adressing testing....address testing..</p>
  </div>
  <div className="footer-content">
    <img alt="Podcast App" src="\Nexus-logo.jpg" height="100" width="60" />
    <p>Empowering Freelancers, Connecting Possibilities – Join Nexus Today.</p>
  </div>
</div>
</div>
</div>
  );
}

export default HomePage;