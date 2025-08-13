import React, { useState } from 'react';
import '@/components/common/Input.css';

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ElementType;
  iconSize?: number;
  showTogglePassword?: boolean;
  showPasswordIcon?: React.ElementType;
  hidePasswordIcon?: React.ElementType;
  disabled?: boolean;
  className?: string;
  inputStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  errorStyle?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  icon: Icon,
  iconSize = 20,
  showTogglePassword = false,
  showPasswordIcon: ShowPasswordIcon,
  hidePasswordIcon: HidePasswordIcon,
  disabled = false,
  className = '',
  inputStyle = {},
  wrapperStyle = {},
  labelStyle = {},
  errorStyle = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showTogglePassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`input ${className}`.trim()}>
      {label && (
        <label className="input__label" style={labelStyle}>
          {label}
        </label>
      )}

      <div className="input__wrapper" style={wrapperStyle}>
        <input
          className="input__field"
          type={inputType}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          style={inputStyle}
        />
        {isPassword && showTogglePassword && (ShowPasswordIcon || HidePasswordIcon) && (
          <span
            className="input__icon-btn"
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            role="button"
            tabIndex={0}
            onClick={() => setShowPassword((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setShowPassword((v) => !v);
            }}
            style={{ cursor: 'pointer' }}
          >
            {showPassword
              ? HidePasswordIcon && <HidePasswordIcon size={iconSize} />
              : ShowPasswordIcon && <ShowPasswordIcon size={iconSize} />}
          </span>
        )}
      </div>

      {error && (
        <span className="input__error" style={errorStyle}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
