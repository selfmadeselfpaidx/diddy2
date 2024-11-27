import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'px-4 py-2 rounded-lg transition-colors duration-200 text-lg font-medium',
        {
          'bg-red-600 hover:bg-red-700 text-white': variant === 'primary',
          'bg-gray-700 hover:bg-gray-800 text-white': variant === 'secondary',
        }
      )}
    >
      {children}
    </button>
  );
};