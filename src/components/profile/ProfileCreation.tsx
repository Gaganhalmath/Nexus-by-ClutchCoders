import React, { useState } from 'react';
import { Upload, Plus, Users } from 'lucide-react';

interface ProfileCreationProps {
  onComplete: (profileData: any) => void;
  onSkip: () => void;
}

const ProfileCreation: React.FC<ProfileCreationProps> = ({ onComplete, onSkip }) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [experience, setExperience] = useState('');
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);

  const communities = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'UI/UX Design',
    'DevOps',
    'Machine Learning',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      avatar,
      interests,
      skills,
      experience,
      communities: selectedCommunities,
    });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36393f] p-4">
      <div className="w-full max-w-2xl bg-[#2f3136] p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6">Complete Your Profile</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Upload */}
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-24">
              <div className={`w-full h-full rounded-full flex items-center justify-center ${
                avatar ? 'bg-transparent' : 'bg-[#202225]'
              }`}>
                {avatar ? (
                  <img src={avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <Upload className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div className="text-gray-400">
              <p className="font-medium text-white">Profile Picture</p>
              <p className="text-sm">Upload your profile picture</p>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-white font-medium mb-2">Fields of Interest</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {interests.map((interest, index) => (
                <span key={index} className="px-3 py-1 bg-[#404449] text-white rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                className="flex-1 bg-[#202225] text-white rounded px-3 py-2"
                placeholder="Add an interest"
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
            <label className="block text-white font-medium mb-2">Skills</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-[#404449] text-white rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-1 bg-[#202225] text-white rounded px-3 py-2"
                placeholder="Add a skill"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-[#5865f2] text-white rounded hover:bg-[#4752c4]"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-white font-medium mb-2">Experience</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-[#202225] text-white rounded px-3 py-2 h-32"
              placeholder="Tell us about your experience..."
            />
          </div>

          {/* Communities */}
          <div>
            <label className="block text-white font-medium mb-2">Join Communities</label>
            <div className="grid grid-cols-2 gap-4">
              {communities.map((community) => (
                <div
                  key={community}
                  onClick={() => {
                    setSelectedCommunities((prev) =>
                      prev.includes(community)
                        ? prev.filter((c) => c !== community)
                        : [...prev, community]
                    );
                  }}
                  className={`p-4 rounded cursor-pointer flex items-center space-x-2 ${
                    selectedCommunities.includes(community)
                      ? 'bg-[#5865f2] text-white'
                      : 'bg-[#202225] text-gray-400'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>{community}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={onSkip}
              className="text-gray-400 hover:text-white"
            >
              Skip for now
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#5865f2] text-white rounded hover:bg-[#4752c4]"
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
