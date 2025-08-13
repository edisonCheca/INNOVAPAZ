import React from 'react';
import type { IconType } from 'react-icons';
import styles from './Button.module.css';

interface ButtonProps {
  // Texto del botón
  title: string;
  description?: string;

  // Gradiente para parte del título
  gradientText?: string;
  gradientColors?: string;

  // Estilo del botón
  hasBackground?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  // Icono
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  iconSize?: number;

  // Tipografía
  titleFontWeight?: 'normal' | 'bold';
  descriptionFontWeight?: 'normal' | 'bold';

  // Dimensiones
  size?: 'small' | 'medium' | 'large' | 'custom';
  width?: string;
  height?: string;

  // Funcionalidad
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  description,
  gradientText = '',
  gradientColors = 'linear-gradient(45deg, #ff6b6b, #ffa500)',
  hasBackground = true,
  backgroundColor = 'var(--sec-800)',
  borderColor = 'var(--sec-800)',
  textColor = 'var(--bg-50)',
  icon: Icon,
  iconPosition = 'left',
  iconSize = 20,
  titleFontWeight = 'bold',
  descriptionFontWeight = 'normal',
  size = 'medium',
  width,
  height,
  onClick,
  disabled = false,
  className = '',
}) => {
  const processTitle = () => {
    if (!gradientText) return title;

    const parts = title.split(gradientText);
    if (parts.length === 1) return title;

    return (
      <>
        {parts[0]}
        <span
          className={styles.gradientText}
          style={{ background: gradientColors, WebkitBackgroundClip: 'text' }}
        >
          {gradientText}
        </span>
        {parts[1]}
      </>
    );
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: hasBackground ? backgroundColor : 'transparent',
    border: hasBackground ? 'none' : `2px solid ${borderColor}`,
    color: hasBackground ? textColor : borderColor,
    width: size === 'custom' ? width : undefined,
    height: size === 'custom' ? height : undefined,
  };

  const buttonClasses = [styles.button, styles[size], disabled ? styles.disabled : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} style={buttonStyle} onClick={onClick} disabled={disabled}>
      <div className={styles.content}>
        {Icon && iconPosition === 'left' && <Icon className={styles.iconLeft} size={iconSize} />}

        <div className={styles.textContent}>
          <h3 className={styles.title} style={{ fontWeight: titleFontWeight }}>
            {processTitle()}
          </h3>

          {description && (
            <p className={styles.description} style={{ fontWeight: descriptionFontWeight }}>
              {description}
            </p>
          )}
        </div>

        {Icon && iconPosition === 'right' && <Icon className={styles.iconRight} size={iconSize} />}
      </div>
    </button>
  );
};

export default Button;
