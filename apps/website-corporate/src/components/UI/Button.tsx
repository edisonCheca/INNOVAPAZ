import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'outlineLight'
  | 'highContrast';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
}

interface ButtonElementProps extends BaseButtonProps {
  as?: 'button';
  type?: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LinkElementProps extends BaseButtonProps {
  as: 'link';
  to: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface AnchorElementProps extends BaseButtonProps {
  as: 'anchor';
  href: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

type ButtonProps = ButtonElementProps | LinkElementProps | AnchorElementProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  ...props
}) => {
  const getClassName = () => {
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      loading && styles.loading,
      icon && !iconOnly && (iconPosition === 'left' ? styles.iconLeft : styles.iconRight),
      iconOnly && styles.iconOnly,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return classes;
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {!iconOnly && children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (props.as === 'link') {
    return (
      <Link to={props.to} className={getClassName()} onClick={props.onClick}>
        {content}
      </Link>
    );
  }

  if (props.as === 'anchor') {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={getClassName()}
        onClick={props.onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      className={getClassName()}
      disabled={disabled || loading}
      onClick={props.onClick}
    >
      {content}
    </button>
  );
};
