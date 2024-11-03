import React from 'react';
import { Users, Trophy, UserPlus, MessageSquare, UserCheck } from 'lucide-react';

interface ServerIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const ServerIcon: React.FC<ServerIconProps> = ({ icon: Icon, label }) => (
  <div className="relative group">
    <div className="w-12 h-12 bg-[#36393f] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer">
      <Icon className="h-6 w-6 text-[#5865f2]" />
    </div>
    <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
      {label}
    </div>
  </div>
);

const ServerSidebar: React.FC = () => (
  <div className="w-[72px] bg-[#202225] flex flex-col items-center py-3 space-y-2">
    <div className="w-12 h-12 bg-[#5865f2] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer">
      <MessageSquare className="h-7 w-7 text-white" />
    </div>
    <div className="w-12 h-[2px] bg-[#36393f] rounded-full" />
    <ServerIcon icon={UserCheck} label="Mentorship" />
    <ServerIcon icon={Trophy} label="Achievements" />
    <ServerIcon icon={UserPlus} label="Find Friends" />
    <ServerIcon icon={Users} label="Join Community" />
  </div>
);

export default ServerSidebar;
