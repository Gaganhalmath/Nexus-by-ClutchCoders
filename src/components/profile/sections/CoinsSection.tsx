import React from 'react';
import { Coins } from 'lucide-react';

const CoinsSection: React.FC = () => {
  const coinHistory = [
    { id: 1, amount: 100, reason: 'Daily login bonus', date: '2024-03-10' },
    { id: 2, amount: 50, reason: 'Helped a user', date: '2024-03-09' },
    { id: 3, amount: 200, reason: 'Won community event', date: '2024-03-08' },
  ];

  return (
    <div className="bg-[#2f3136] p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Coins className="h-5 w-5 text-yellow-500 mr-2" />
          <h3 className="text-white font-semibold">Coins</h3>
        </div>
        <div className="text-yellow-500 font-bold">350 coins</div>
      </div>
      <div className="space-y-3">
        {coinHistory.map(item => (
          <div key={item.id} className="bg-[#36393f] p-3 rounded">
            <div className="flex items-center justify-between">
              <span className="text-white">+{item.amount}</span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
            <p className="text-sm text-gray-400">{item.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinsSection;
