import React, { useState } from 'react';

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  showTogglePassword?: boolean;
  showPasswordIcon?: React.ElementType;
  hidePasswordIcon?: React.ElementType;
  disabled?: boolean;
  className?: string;

  containerWidth?: 'full' | 'auto' | 'fit-content' | string;
  size?: 'small' | 'medium' | 'large' | 'custom';
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  textColor?: string;
  labelColor?: string;
  labelFontSize?: string;
  errorColor?: string;

  multiline?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  icon: Icon,
  iconPosition = 'right',
  iconSize = 20,
  showTogglePassword = false,
  showPasswordIcon: ShowPasswordIcon,
  hidePasswordIcon: HidePasswordIcon,
  disabled = false,
  className = '',
  containerWidth = 'auto',
  size = 'medium',
  width,
  height,
  backgroundColor = 'transparent',
  borderColor = 'var(--bg-900)',
  borderWidth = '1px',
  textColor = 'var(--pri-100)',
  labelColor = 'var(--pri-100)',
  labelFontSize,
  errorColor = 'var(--acc-900)',
  multiline = false,
  rows = 4,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showTogglePassword ? (showPassword ? 'text' : 'password') : type;

  const getContainerWidth = (): string => {
    if (containerWidth === 'full') return '100%';
    if (containerWidth === 'auto') return 'auto';
    if (containerWidth === 'fit-content') return 'fit-content';
    if (typeof containerWidth === 'string') return containerWidth;
    return 'auto';
  };

  const inputWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor,
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius: '8px',
    padding: '0 12px',
    height: multiline
      ? 'auto'
      : height || (size === 'small' ? '50px' : size === 'large' ? '52px' : '60px'),
    width: size === 'custom' && width ? width : '100%',
    boxSizing: 'border-box',
  };

  const inputFieldStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: textColor,
    fontSize: size === 'small' ? '14px' : size === 'large' ? '20px' : '16px',
    height: multiline ? 'auto' : '100%',
    resize: multiline ? 'vertical' : 'none', // solo textarea se puede redimensionar vertical
    padding: multiline ? '8px 0' : undefined,
  };

  return (
    <div
      className={`custom-input-container ${className}`}
      style={{ width: getContainerWidth(), display: 'flex', flexDirection: 'column', gap: '4px' }}
    >
      {label && (
        <label
          htmlFor={id}
          style={{
            color: labelColor,
            fontSize:
              labelFontSize || (size === 'small' ? '13px' : size === 'large' ? '20px' : '16px'),
          }}
        >
          {label}
        </label>
      )}
      <div style={inputWrapperStyle}>
        {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
        {multiline ? (
          <textarea
            id={id}
            name={name || id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            rows={rows}
            style={inputFieldStyle}
          />
        ) : (
          <input
            id={id}
            type={inputType}
            name={name || id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            style={inputFieldStyle}
          />
        )}
        {isPassword && showTogglePassword && (ShowPasswordIcon || HidePasswordIcon) && (
          <span
            onClick={() => setShowPassword((v) => !v)}
            style={{ cursor: 'pointer', display: 'flex' }}
          >
            {showPassword
              ? HidePasswordIcon && <HidePasswordIcon size={iconSize} />
              : ShowPasswordIcon && <ShowPasswordIcon size={iconSize} />}
          </span>
        )}
        {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
      </div>
      {error && <span style={{ color: errorColor, fontSize: '12px' }}>{error}</span>}
    </div>
  );
};

export default Input;
