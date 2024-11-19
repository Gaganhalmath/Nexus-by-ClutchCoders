import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#36393f] text-gray-200 font-roboto">
      {/* Header */}
      <div className="header bg-black text-white p-4 flex justify-between items-center">
        <img src="/Nexus-logo.jpg" alt="Logo" className="h-10" />
        <div className="menu flex gap-4">
          <a href="/HomePage" className="font-medium">Home</a>
          <a href="/DashBoard" className="font-medium">Discussion</a>
          <a href="/mentorship" className="font-medium">Mentoring</a>
          <a href="/HomePage" className="font-medium">Go Back</a>
        </div>
      </div>

      {/* Banner */}
      <div className="about-banner bg-violet-600 text-white text-center p-8">
        <h1 className="text-4xl">About Us</h1>
      </div>

      {/* Content */}
      <div className="content p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl mb-4">Our Mission</h2>
        <p className="text-base leading-relaxed mb-8">
          The Podcast Community for Freelancers is committed to delivering content that not only educates but also empowers freelancers around the globe.
          We believe in the power of storytelling and practical advice to help you grow your freelance career, build your business, and achieve your goals.
        </p>

        <h2 className="text-3xl mb-4">Our Vision</h2>
        <p className="text-base leading-relaxed mb-8">
          Our vision is to be a beacon of inspiration for freelancers, fostering a sense of community and connection. We aim to bridge the gap between
          seasoned professionals and those just starting out, offering a platform where everyone can learn, share, and thrive.
        </p>

        <h3 className="text-2xl mt-8 mb-4">What Makes Us Different?</h3>
        <p className="text-base leading-relaxed mb-8">
          We are more than just a podcast. We are a growing community of like-minded individuals who understand the freelance lifestyle and its unique
          challenges. Our episodes are tailored to address real-world problems freelancers face, from finding clients to managing work-life balance.
        </p>

        <h3 className="text-2xl mt-8 mb-4">Core Values</h3>
        <ul className="list-disc list-inside mb-8">
          <li className="text-base leading-relaxed mb-2"><strong>Empowerment:</strong> We aim to empower freelancers with the knowledge and tools they need to succeed.</li>
          <li className="text-base leading-relaxed mb-2"><strong>Community:</strong> We believe in the strength of a united freelance community, where everyone lifts each other up.</li>
          <li className="text-base leading-relaxed mb-2"><strong>Integrity:</strong> We are committed to providing authentic and honest content, free from bias or hidden agendas.</li>
          <li className="text-base leading-relaxed mb-2"><strong>Innovation:</strong> We strive to bring fresh perspectives and new ideas to the world of freelancing.</li>
        </ul>

        <h2 className="text-3xl mb-4">Meet the Team</h2>
        <div className="team grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="team-member text-center p-4 bg-gray-700 text-gray-200 rounded-lg shadow-md">
            <img src="Anant.jpeg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl mb-2">Anant Inamdar</h3>
            <p className="text-sm text-gray-400">Founder & Host</p>
          </div>
          <div className="team-member text-center p-4 bg-gray-700 text-gray-200 rounded-lg shadow-md">
            <img src="Gagan.jpeg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl mb-2">Gagan H</h3>
            <p className="text-sm text-gray-400">Content Creator</p>
          </div>
          <div className="team-member text-center p-4 bg-gray-700 text-gray-200 rounded-lg shadow-md">
            <img src="Faizal.jpeg" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl mb-2">Faisal Kittur</h3>
            <p className="text-sm text-gray-400">Community Manager</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer bg-black text-white text-center p-4">
        <p>© 2023 The Podcast Community for Freelancers. All rights reserved.</p>
        <div className="social-icons my-4 flex justify-center space-x-4">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
