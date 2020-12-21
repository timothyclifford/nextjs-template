import Spinner from 'icons/spinner';
import React from 'react';

interface ButtonProps {
  title?: string;
  isLoading?: boolean;
}

const Button = ({
  isLoading,
  title,
  children,
  ...buttonProps
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button {...buttonProps}>
      {isLoading ? <Spinner width="20" fill="white" /> : title}
      {children}
    </button>
  );
};

export default Button;
