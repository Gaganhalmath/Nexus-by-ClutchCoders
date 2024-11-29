import React, { useState } from 'react';
import { Upload, Plus, Users, Code, PenTool, PieChart, Layers, Server, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ProfileData {
  avatar: string | null;
  interests: string[];
  skills: string[];
  experience: string;
  communities: string[];
}

const predefinedSkills = [
  { name: 'Web Development', icon: Code },
  { name: 'Graphic Design', icon: PenTool },
  { name: 'SEO', icon: PieChart },
  { name: 'Data Analysis', icon: Layers },
  { name: 'Cloud Computing', icon: Server },
  { name: 'Translation', icon: Globe },
];

const exampleCommunities = [
  'React Developers',
  'Digital Marketers',
  'Illustrators',
  'AI Enthusiasts',
  'Content Writers',
  'DevOps Experts',
];

const ProfileCreation: React.FC = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState<ProfileData>({
    avatar: null,
    interests: [],
    skills: [],
    experience: '',
    communities: [],
  });

  const [newInterest, setNewInterest] = useState('');
  const [remainingFields, setRemainingFields] = useState(5); // Starting with 5 remaining fields

  // Dummy logic: Decrease remainingFields when user uploads an avatar, adds an interest, or adds a skill
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({ ...prevData, avatar: reader.result as string }));
        setRemainingFields((fields) => fields - 1); // Decrease remainingFields
      };
      reader.readAsDataURL(file);
    }
  };

  const addInterest = () => {
    if (newInterest && !profileData.interests.includes(newInterest)) {
      setProfileData((prevData) => ({
        ...prevData,
        interests: [...prevData.interests, newInterest],
      }));
      setNewInterest(''); // Clear the input field after adding interest
      setRemainingFields((fields) => fields - 1); // Decrease remainingFields
    }
  };

  const toggleSkillSelection = (skill: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      skills: prevData.skills.includes(skill)
        ? prevData.skills.filter((s) => s !== skill)
        : [...prevData.skills, skill],
    }));
    setRemainingFields((fields) => fields - 1); // Decrease remainingFields when skill is selected
  };

  const toggleCommunitySelection = (community: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      communities: prevData.communities.includes(community)
        ? prevData.communities.filter((c) => c !== community)
        : [...prevData.communities, community],
    }));
    setRemainingFields((fields) => fields - 1); // Decrease remainingFields when community is selected
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/profiles',profileData);
      navigate('/HomePage');
    } catch (error) {
      console.error('Error saving profile',error);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#36393f] text-white">
      {/* Left Section: Profile Preview */}
      <div className="w-1/3 bg-[#2f3136] p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Profile Preview</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32">
            {profileData.avatar ? (
              <img src={profileData.avatar} alt="Avatar" className="rounded-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#202225] rounded-full flex items-center justify-center">
                <Upload className="text-gray-400 w-10 h-10" />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Your Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profileData.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#5865f2] text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Interests</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profileData.interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-[#5865f2] text-white px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-400">Remaining Fields: {remainingFields}</p>
          </div>
        </div>
      </div>

      {/* Right Section: Profile Form */}
      <div className="w-2/3 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6">Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Avatar Upload */}
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-24">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center ${
                  profileData.avatar ? 'bg-transparent' : 'bg-[#202225]'
                }`}
              >
                {profileData.avatar ? (
                  <img src={profileData.avatar} alt="Profile" className="rounded-full object-cover" />
                ) : (
                  <Upload className="text-gray-400 w-8 h-8" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <p className="text-sm text-gray-400">Upload a profile picture to personalize your profile.</p>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-lg font-medium mb-2">Add Your Interests</label>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                className="flex-1 bg-[#202225] text-white rounded px-4 py-2"
                placeholder="Enter your interest"
              />
              <button
                type="button"
                onClick={addInterest}
                className="px-4 py-2 bg-[#5865f2] text-white rounded hover:bg-[#4752c4]"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-lg font-medium mb-2">Select Your Skills</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {predefinedSkills.map(({ name, icon: Icon }) => (
                <button
                  type="button"
                  key={name}
                  onClick={() => toggleSkillSelection(name)}
                  className={`p-3 rounded flex items-center space-x-2 ${
                    profileData.skills.includes(name)
                      ? 'bg-[#5865f2] text-white'
                      : 'bg-[#202225] text-gray-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Communities */}
          <div>
            <label className="block text-lg font-medium mb-2">Join Communities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {exampleCommunities.map((community) => (
                <button
                  type="button"
                  key={community}
                  onClick={() => toggleCommunitySelection(community)}
                  className={`p-3 rounded flex items-center space-x-2 ${
                    profileData.communities.includes(community)
                      ? 'bg-[#5865f2] text-white'
                      : 'bg-[#202225] text-gray-400'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>{community}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-lg font-medium mb-2">Share Your Experience</label>
            <textarea
              value={profileData.experience}
              onChange={(e) =>
                setProfileData((prevData) => ({ ...prevData, experience: e.target.value }))
              }
              className="w-full bg-[#202225] rounded px-4 py-2 h-32 text-white"
              placeholder="Tell us about your work experience..."
            />
          </div>

          {/* Submit */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate('/HomePage')}
              className="text-gray-400 hover:text-white"
            >
              Skip for now
            </button>
            <button
              type="submit"
              className="bg-[#5865f2] text-white px-6 py-2 rounded hover:bg-[#4752c4]"
            >
              Complete Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileCreation;