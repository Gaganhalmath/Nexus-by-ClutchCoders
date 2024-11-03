import React from 'react';
import { Gift } from 'lucide-react';

const RedeemSection: React.FC = () => {
  const redeemableItems = [
    {
      id: 1,
      name: 'Custom Profile Badge',
      cost: 500,
      description: 'Unique badge for your profile',
      available: false,
    },
    {
      id: 2,
      name: 'Premium Theme',
      cost: 300,
      description: 'Exclusive chat theme',
      available: true,
    },
    {
      id: 3,
      name: 'Special Emojis Pack',
      cost: 200,
      description: 'Collection of rare emojis',
      available: true,
    },
  ];

  return (
    <div className="bg-[#2f3136] p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <Gift className="h-5 w-5 text-purple-500 mr-2" />
        <h3 className="text-white font-semibold">Redeem Coins</h3>
      </div>
      <div className="space-y-3">
        {redeemableItems.map(item => (
          <div key={item.id} className="bg-[#36393f] p-3 rounded">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{item.name}</span>
              <span className="text-yellow-500">{item.cost} coins</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">{item.description}</p>
            <button
              className={`w-full py-2 px-4 rounded text-sm font-medium ${
                item.available
                  ? 'bg-[#5865f2] text-white hover:bg-[#4752c4]'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!item.available}
            >
              {item.available ? 'Redeem Now' : 'Not Enough Coins'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedeemSection;
