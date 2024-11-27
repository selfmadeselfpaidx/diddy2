import React from 'react';

interface GameTextProps {
  text: string;
}

export const GameText: React.FC<GameTextProps> = ({ text }) => {
  return (
    <p className="text-lg leading-relaxed mb-8 text-gray-200">
      {text}
    </p>
  );
};