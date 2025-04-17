
import React from "react";

interface HeroBadgeProps {
  text: string;
  position: string;
  color: string;
}

const HeroBadge: React.FC<HeroBadgeProps> = ({ text, position, color }) => {
  const positionClasses = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2',
    'bottom-left': 'bottom-2 left-2',
    'bottom-right': 'bottom-2 right-2',
  }[position] || 'top-2 left-2';

  const colorClasses = {
    'yellow': 'bg-yellow-400 text-black',
    'purple': 'bg-purple-600 text-white',
    'blue': 'bg-blue-500 text-white',
  }[color] || 'bg-yellow-400 text-black';

  return (
    <div className={`absolute ${positionClasses} ${colorClasses} py-1 px-3 rounded-full text-xs font-medium z-10`}>
      {text}
    </div>
  );
};

export default HeroBadge;
