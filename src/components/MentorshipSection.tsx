import React, { useState } from 'react';

interface Mentor {
  id: number;
  name: string;
  expertise: string;
  bio: string;
  availability: boolean;
}

const dummyMentors: Mentor[] = [
  { id: 1, name: 'Alice Johnson', expertise: 'Web Development', bio: '10 years in React and Node.js.', availability: true },
  { id: 2, name: 'Mark Smith', expertise: 'Data Science', bio: 'Ex-Google Data Engineer.', availability: false },
  { id: 3, name: 'Sophia Lee', expertise: 'UI/UX Design', bio: 'Designed apps for Fortune 500 companies.', availability: true },
    { id: 4, name: 'Ravi Kumar', expertise: 'Mobile Development', bio: '5 years in Flutter and React Native.', availability: true },
    { id: 5, name: 'Jessica Brown', expertise: 'Cybersecurity', bio: 'Certified Ethical Hacker (CEH) with global experience.', availability: true },
    { id: 6, name: 'Arjun Iyer', expertise: 'Cloud Computing', bio: 'AWS and Azure certified.', availability: false },
    { id: 7, name: 'Priya Sharma', expertise: 'Machine Learning', bio: 'Published research on neural networks.', availability: true },
    { id: 8, name: 'Liam Taylor', expertise: 'Web Development', bio: 'Specializes in Next.js and Tailwind CSS.', availability: true },
    { id: 9, name: 'Mia Singh', expertise: 'Digital Marketing', bio: 'Google Ads and SEO expert.', availability: false },
    { id: 10, name: 'Ethan Jones', expertise: 'Blockchain', bio: 'Built Ethereum-based smart contracts.', availability: true },
    { id: 11, name: 'Ananya Das', expertise: 'Content Writing', bio: 'Writes technical blogs for leading SaaS companies.', availability: true },
    { id: 12, name: 'Noah Wilson', expertise: 'Mobile Development', bio: 'Android and iOS app developer.', availability: false },
    { id: 13, name: 'Zara Patel', expertise: 'UI/UX Design', bio: 'Designed for healthcare and fintech startups.', availability: true },
    { id: 14, name: 'Aarav Mehta', expertise: 'DevOps', bio: '8 years in CI/CD pipelines.', availability: true },
    { id: 15, name: 'Emily Thomas', expertise: 'Game Development', bio: 'Unity and Unreal Engine expert.', availability: true },
    { id: 16, name: 'Oscar White', expertise: 'Web Development', bio: 'Specializes in Django and Vue.js.', availability: false },
    { id: 17, name: 'Isha Reddy', expertise: 'Artificial Intelligence', bio: 'AI product manager at a top tech firm.', availability: true },
    { id: 18, name: 'Daniel Evans', expertise: 'Software Testing', bio: 'Automated and manual testing expert.', availability: false },
    { id: 19, name: 'Vikram Chaudhary', expertise: 'Data Science', bio: 'Kaggle Grandmaster.', availability: true },
    { id: 20, name: 'Samantha Carter', expertise: 'Cloud Computing', bio: 'Google Cloud certified.', availability: true },
    { id: 21, name: 'Rohit Kapoor', expertise: 'Digital Marketing', bio: 'Specializes in influencer marketing.', availability: true },
    { id: 22, name: 'Aditi Nair', expertise: 'Graphic Design', bio: 'Brand designer with Adobe certifications.', availability: true },
    { id: 23, name: 'Jack Edwards', expertise: 'DevOps', bio: 'Kubernetes and Docker specialist.', availability: false },
    { id: 24, name: 'Meera Sen', expertise: 'E-commerce Development', bio: 'Built Shopify stores for luxury brands.', availability: true },
    { id: 25, name: 'Oliver Green', expertise: 'Data Science', bio: 'Python and R expert.', availability: false },
    { id: 26, name: 'Akash Jain', expertise: 'AI and Robotics', bio: 'Worked on autonomous vehicle algorithms.', availability: true },
    { id: 27, name: 'Chloe Hill', expertise: 'Project Management', bio: 'PMP certified with 15 years experience.', availability: true },
    { id: 28, name: 'Karthik Menon', expertise: 'Game Development', bio: 'Expert in augmented reality games.', availability: false },
    { id: 29, name: 'Ruby Harris', expertise: 'Web Development', bio: 'Specializes in full-stack JavaScript.', availability: true },
    { id: 30, name: 'Mohan Pillai', expertise: 'Data Analysis', bio: 'Built dashboards for enterprise clients.', availability: false },
    { id: 31, name: 'Harper Scott', expertise: 'Mobile Development', bio: 'Expert in Kotlin and Swift.', availability: true },
    { id: 32, name: 'Tanvi Chawla', expertise: 'UI/UX Design', bio: 'Designed award-winning mobile apps.', availability: true },
    { id: 33, name: 'William Adams', expertise: 'Blockchain', bio: 'Developed NFT platforms.', availability: true },
    { id: 34, name: 'Niharika Verma', expertise: 'Machine Learning', bio: 'TensorFlow and PyTorch expert.', availability: true },
    { id: 35, name: 'Benjamin Miller', expertise: 'Cybersecurity', bio: 'Penetration testing expert.', availability: true },
    { id: 36, name: 'Aanya Gupta', expertise: 'Digital Marketing', bio: 'Social media marketing specialist.', availability: true },
    { id: 37, name: 'Lucas Baker', expertise: 'Web Development', bio: 'PHP and Laravel developer.', availability: false },
    { id: 38, name: 'Shreya Rao', expertise: 'Cloud Computing', bio: 'AWS Solutions Architect.', availability: true },
    { id: 39, name: 'Matthew Davis', expertise: 'E-commerce Development', bio: 'WooCommerce expert.', availability: false },
    { id: 40, name: 'Pooja Sinha', expertise: 'Content Writing', bio: 'Writes for top Indian tech blogs.', availability: true },
  ];
 
  const MentorshipSection: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState<string[]>([
      "Hi, welcome! Feel free to ask your questions.",
      "Can you guide me on learning React?",
      "What are the career prospects in Web Development?",
    ]);
    const [mentorshipRequestStatus, setMentorshipRequestStatus] = useState('');
  
    const filteredMentors = dummyMentors.filter((mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleRequest = (mentor: Mentor) => {
      if (!mentor.availability) {
        setMentorshipRequestStatus('This mentor is currently unavailable.');
      } else {
        setSelectedMentor(mentor);
        setMentorshipRequestStatus('Request sent! Waiting for approval...');
      }
    };
  
    const handleChatSend = () => {
      if (message.trim()) {
        setChatMessages((prevMessages) => [...prevMessages, message]);
        setMessage('');
      }
    };
  
    return (
      <div className="min-h-screen p-6 bg-[#36393f] text-white flex flex-col lg:flex-row">
       {/* Left Section: Mentor List */}
      <div className={`lg:w-${selectedMentor ? '2/3' : 'full'} pr-6`}>
        {/* Notification */}
        {mentorshipRequestStatus && (
          <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg">
            {mentorshipRequestStatus}
          </div>
        )}

        <h1 className="text-2xl font-bold mb-4 text-center">Find Your Mentor</h1>

        {/* Mentor Search */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search mentors by name..."
            className="w-full max-w-lg px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Mentor List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-bold">{mentor.name}</h2>
              <p className="text-sm text-gray-300">{mentor.expertise}</p>
              <p className="mt-2">{mentor.bio}</p>
              <button
                className={`mt-4 w-full py-2 rounded-lg ${
                  mentor.availability
                    ? 'bg-violet-600 text-white hover:bg-violet-700'
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                }`}
                onClick={() => handleRequest(mentor)}
                disabled={!mentor.availability}
              >
                {mentor.availability ? 'Send Request' : 'Unavailable'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Chat */}
      {selectedMentor && (
        <div className="lg:w-1/3 lg:pl-6">
          <div className="mt-6 lg:mt-0 p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Chat with {selectedMentor.name}</h2>
            <div className="mt-4 border p-4 h-60 overflow-y-scroll bg-gray-700 rounded-md">
              {chatMessages.map((msg, index) => (
                <div key={index} className="mb-2 text-sm text-white">
                  {msg}
                </div>
              ))}
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-grow px-4 py-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={handleChatSend}
                className="ml-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorshipSection;
