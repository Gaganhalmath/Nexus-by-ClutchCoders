import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations
import { Search, User, CheckCircle } from "lucide-react";

interface Friend {
  id: number;
  name: string;
  profilePhoto: string;
  skills: string[];
  mentorship: boolean;
}

const dummyFriends: Friend[] = [
  { id: 1, name: "Aarav Patel", profilePhoto: "/blank-profile-icon.jpg", skills: ["React", "Node.js"], mentorship: true },
  { id: 2, name: "Priya Sharma", profilePhoto: "/blank-profile-icon.jpg", skills: ["Graphic Design", "Photoshop"], mentorship: false },
  { id: 3, name: "Vikram Singh", profilePhoto: "/blank-profile-icon.jpg", skills: ["Data Analysis", "Python"], mentorship: true },
  { id: 4, name: "Ananya Gupta", profilePhoto: "/blank-profile-icon.jpg", skills: ["SEO", "Marketing"], mentorship: false },
  { id: 5, name: "Rohan Verma", profilePhoto: "/blank-profile-icon.jpg", skills: ["Cloud Computing", "AWS"], mentorship: true },
    { id: 1, name: "Alice Johnson", profilePhoto: "/blank-profile-icon.jpg", skills: ["Web Development"], mentorship: true },
    { id: 2, name: "Mark Smith", profilePhoto: "/blank-profile-icon.jpg", skills: ["Data Science"], mentorship: false },
    { id: 3, name: "Sophia Lee", profilePhoto: "/blank-profile-icon.jpg", skills: ["UI/UX Design"], mentorship: true },
    { id: 4, name: "Ravi Kumar", profilePhoto: "/blank-profile-icon.jpg", skills: ["Mobile Development"], mentorship: true },
    { id: 5, name: "Jessica Brown", profilePhoto: "/blank-profile-icon.jpg", skills: ["Cybersecurity"], mentorship: true },
    { id: 6, name: "Arjun Iyer", profilePhoto: "/Anant.jpeg", skills: ["Cloud Computing"], mentorship: false },
    { id: 7, name: "Priya Sharma", profilePhoto: "/blank-profile-icon.jpg", skills: ["Machine Learning"], mentorship: true },
    { id: 8, name: "Liam Taylor", profilePhoto: "/blank-profile-icon.jpg", skills: ["Web Development"], mentorship: true },
    { id: 9, name: "Mia Singh", profilePhoto: "/blank-profile-icon.jpg", skills: ["Digital Marketing"], mentorship: false },
    { id: 10, name: "Ethan Jones", profilePhoto: "/blank-profile-icon.jpg", skills: ["Blockchain"], mentorship: true },
    { id: 11, name: "Ananya Das", profilePhoto: "/blank-profile-icon.jpg", skills: ["Content Writing"], mentorship: true },
    { id: 12, name: "Noah Wilson", profilePhoto: "/blank-profile-icon.jpg", skills: ["Mobile Development"], mentorship: false },
    { id: 13, name: "Zara Patel", profilePhoto: "/blank-profile-icon.jpg", skills: ["UI/UX Design"], mentorship: true },
    { id: 14, name: "Aarav Mehta", profilePhoto: "/blank-profile-icon.jpg", skills: ["DevOps"], mentorship: true },
    { id: 15, name: "Emily Thomas", profilePhoto: "/blank-profile-icon.jpg", skills: ["Game Development"], mentorship: true },
    { id: 16, name: "Oscar White", profilePhoto: "/blank-profile-icon.jpg", skills: ["Web Development"], mentorship: false },
    { id: 17, name: "Isha Reddy", profilePhoto: "/blank-profile-icon.jpg", skills: ["Artificial Intelligence"], mentorship: true },
    { id: 18, name: "Daniel Evans", profilePhoto: "/blank-profile-icon.jpg", skills: ["Software Testing"], mentorship: false },
    { id: 19, name: "Vikram Chaudhary", profilePhoto: "/blank-profile-icon.jpg", skills: ["Data Science"], mentorship: true },
    { id: 20, name: "Samantha Carter", profilePhoto: "/blank-profile-icon.jpg", skills: ["Cloud Computing"], mentorship: true },
    { id: 21, name: "Rohit Kapoor", profilePhoto: "/blank-profile-icon.jpg", skills: ["Digital Marketing"], mentorship: true },
    { id: 22, name: "Aditi Nair", profilePhoto: "/blank-profile-icon.jpg", skills: ["Graphic Design"], mentorship: true },
    { id: 23, name: "Jack Edwards", profilePhoto: "/blank-profile-icon.jpg", skills: ["DevOps"], mentorship: false },
    { id: 24, name: "Meera Sen", profilePhoto: "/blank-profile-icon.jpg", skills: ["E-commerce Development"], mentorship: true },
    { id: 25, name: "Oliver Green", profilePhoto: "/blank-profile-icon.jpg", skills: ["Data Science"], mentorship: false },
    { id: 26, name: "Akash Jain", profilePhoto: "/blank-profile-icon.jpg", skills: ["AI and Robotics"], mentorship: true },
    { id: 27, name: "Chloe Hill", profilePhoto: "/blank-profile-icon.jpg", skills: ["Project Management"], mentorship: true },
    { id: 28, name: "Karthik Menon", profilePhoto: "/blank-profile-icon.jpg", skills: ["Game Development"], mentorship: false },
    { id: 29, name: "Ruby Harris", profilePhoto: "/blank-profile-icon.jpg", skills: ["Web Development"], mentorship: true },
    { id: 30, name: "Mohan Pillai", profilePhoto: "/blank-profile-icon.jpg", skills: ["Data Analysis"], mentorship: false },
    { id: 31, name: "Harper Scott", profilePhoto: "/blank-profile-icon.jpg", skills: ["Mobile Development"], mentorship: true },
    { id: 32, name: "Tanvi Chawla", profilePhoto: "/blank-profile-icon.jpg", skills: ["UI/UX Design"], mentorship: true },
    { id: 33, name: "William Adams", profilePhoto: "/blank-profile-icon.jpg", skills: ["Blockchain"], mentorship: true },
    { id: 34, name: "Niharika Verma", profilePhoto: "/blank-profile-icon.jpg", skills: ["Machine Learning"], mentorship: true },
    { id: 35, name: "Benjamin Miller", profilePhoto: "/blank-profile-icon.jpg", skills: ["Cybersecurity"], mentorship: true },
    { id: 36, name: "Aanya Gupta", profilePhoto: "/blank-profile-icon.jpg", skills: ["Digital Marketing"], mentorship: true },
    { id: 37, name: "Lucas Baker", profilePhoto: "/blank-profile-icon.jpg", skills: ["Web Development"], mentorship: false },
    { id: 38, name: "Shreya Rao", profilePhoto: "/blank-profile-icon.jpg", skills: ["Cloud Computing"], mentorship: true },
    { id: 39, name: "Matthew Davis", profilePhoto: "/blank-profile-icon.jpg", skills: ["E-commerce Development"], mentorship: false },
    { id: 40, name: "Pooja Sinha", profilePhoto: "/blank-profile-icon.jpg", skills: ["Content Writing"], mentorship: true },
  ];
  

const FindFriends: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFriends, setFilteredFriends] = useState<Friend[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [requestSent, setRequestSent] = useState(false);

  // Filter friends based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredFriends([]);
    } else {
      const filtered = dummyFriends.filter((friend) =>
        friend.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFriends(filtered);
    }
  };

  // Open profile window
  const openProfile = (friend: Friend) => {
    setSelectedFriend(friend);
    setRequestSent(false); // Reset request button state
  };

  // Send friend request
  const sendRequest = () => {
    setRequestSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 relative">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center text-violet-400">Find Friends</h1>

      {/* Search Bar */}
      <motion.div
        className="max-w-lg mx-auto flex items-center bg-gray-800 rounded-full shadow-lg p-4"
        whileHover={{ scale: 1.05 }}
      >
        <Search className="text-gray-400 w-6 h-6 mr-2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for friends..."
          className="flex-grow bg-transparent focus:outline-none text-lg text-gray-100 placeholder-gray-400"
        />
      </motion.div>

      {/* Suggestions List */}
      {filteredFriends.length > 0 && (
        <motion.ul
          className="max-w-lg mx-auto bg-gray-800 mt-4 rounded-lg shadow-lg divide-y divide-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredFriends.map((friend) => (
            <li
              key={friend.id}
              className="flex items-center p-4 cursor-pointer hover:bg-gray-700"
              onClick={() => openProfile(friend)}
            >
              <img
                src={friend.profilePhoto}
                alt={friend.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="text-lg">{friend.name}</span>
            </li>
          ))}
        </motion.ul>
      )}

      {/* Profile Modal */}
      {selectedFriend && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-2xl w-96 relative text-gray-100"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedFriend(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>

            {/* Friend Details */}
            <div className="text-center">
              <img
                src={selectedFriend.profilePhoto}
                alt={selectedFriend.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-violet-400">{selectedFriend.name}</h2>
              <p className="text-sm text-gray-400 mt-2">
                {selectedFriend.mentorship
                  ? "Available for Mentorship"
                  : "Not Available for Mentorship"}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h3 className="text-lg font-medium">Skills</h3>
                <ul className="flex flex-wrap justify-center gap-2 mt-2">
                  {selectedFriend.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Send Request Button */}
              <div className="mt-6">
                <button
                  onClick={sendRequest}
                  disabled={requestSent}
                  className={`px-4 py-2 rounded-full text-white font-medium ${
                    requestSent
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-violet-600 hover:bg-violet-700"
                  }`}
                >
                  {requestSent ? (
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Request Sent</span>
                    </motion.div>
                  ) : (
                    "Send Request"
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default FindFriends;
