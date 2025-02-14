import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
}) => {
  const sizes = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const variants = {
    light: 'text-white fill-white',
    dark: 'text-primary fill-primary'
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center space-x-3 ${variants[variant]}`}
    >
      <svg
        viewBox="0 0 32 32"
        className={`${sizes[size]} aspect-square`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm-4 6a2 2 0 012-2h4a2 2 0 012 2v2.586l1.707-1.707a2 2 0 012.828 2.828L22.828 16l1.707 1.707a2 2 0 11-2.828 2.828L20 18.828V22a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.586l-1.707 1.707a2 2 0 11-2.828-2.828L9.172 16 7.465 14.293a2 2 0 012.828-2.828L12 13.172V10zm2 0v4.586l-2.293-2.293-1.414 1.414L12.586 16l-2.293 2.293 1.414 1.414L14 17.414V22h4v-4.586l2.293 2.293 1.414-1.414L19.414 16l2.293-2.293-1.414-1.414L18 14.586V10h-4z"
        />
      </svg>
      <span className={`font-display font-bold ${textSizes[size]}`}>
        MEIK LABS
      </span>
    </Link>
  );
};