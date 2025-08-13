import React from 'react';
import './NavLink.css';

interface NavLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  onClick,
  variant = 'desktop',
  className = '',
}) => {
  return (
    <button
      className={`nav-link nav-link--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavLink;
