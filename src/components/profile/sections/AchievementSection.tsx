import React from 'react';
import { Trophy } from 'lucide-react';

const AchievementSection: React.FC = () => {
  const achievements = [
    { id: 1, name: 'First Message', description: 'Sent your first message', completed: true },
    { id: 2, name: 'Helper', description: 'Helped 10 users', completed: true },
    { id: 3, name: 'Popular', description: 'Reached 100 followers', completed: false },
  ];

  return (
    <div className="bg-[#2f3136] p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
        <h3 className="text-white font-semibold">Achievements</h3>
      </div>
      <div className="space-y-3">
        {achievements.map(achievement => (
          <div
            key={achievement.id}
            className={`p-3 rounded ${
              achievement.completed ? 'bg-[#404449]' : 'bg-[#36393f]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{achievement.name}</span>
              {achievement.completed && (
                <Trophy className="h-4 w-4 text-yellow-500" />
              )}
            </div>
            <p className="text-sm text-gray-400">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
