
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-md gradient-bg flex items-center justify-center text-white font-bold text-lg">
        M
      </div>
      <span className="font-bold text-xl text-gray-900">MeetXO</span>
    </div>
  );
};

export default Logo;
