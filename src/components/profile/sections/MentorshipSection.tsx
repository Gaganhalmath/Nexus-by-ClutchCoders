import React from 'react';
import { Users } from 'lucide-react';

const MentorshipSection: React.FC = () => {
  const mentorshipStatus = {
    level: 'Senior Mentor',
    mentees: 5,
    rating: 4.8,
    specialties: ['JavaScript', 'React', 'TypeScript'],
  };

  return (
    <div className="bg-[#2f3136] p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <Users className="h-5 w-5 text-blue-500 mr-2" />
        <h3 className="text-white font-semibold">Mentorship Status</h3>
      </div>
      <div className="space-y-3">
        <div className="bg-[#36393f] p-3 rounded">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">{mentorshipStatus.level}</span>
            <span className="text-sm text-yellow-500">★ {mentorshipStatus.rating}</span>
          </div>
          <p className="text-sm text-gray-400">
            Currently mentoring {mentorshipStatus.mentees} users
          </p>
        </div>
        <div className="bg-[#36393f] p-3 rounded">
          <span className="text-white font-medium">Specialties</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {mentorshipStatus.specialties.map(specialty => (
              <span
                key={specialty}
                className="px-2 py-1 bg-[#4f545c] rounded-full text-xs text-white"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipSection;
