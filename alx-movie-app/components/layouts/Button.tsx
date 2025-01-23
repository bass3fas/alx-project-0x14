import React from 'react';

interface LayoutButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<LayoutButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
