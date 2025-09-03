import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
  placeholder?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style,
  width,
  height,
  priority = false,
  objectFit = 'cover',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmMGYwZjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMGUwZTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+',
  overlay = false,
  overlayOpacity = 0.3,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    if (!priority) {
      // Lazy loading simulation
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
      img.onerror = () => {
        setImageError(true);
      };
      img.src = src;
    } else {
      setImageSrc(src);
      setImageLoaded(true);
    }
  }, [src, priority]);

  const imageStyle: React.CSSProperties = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
    objectFit,
    transition: 'opacity 0.3s ease-in-out',
    opacity: imageLoaded ? 1 : 0.7,
    ...style,
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
  };

  if (imageError) {
    return (
      <div
        className={`${className} image-error`}
        style={{
          ...containerStyle,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#999', fontSize: '14px' }}>Imagen no disponible</span>
      </div>
    );
  }

  return (
    <div className={className} style={containerStyle}>
      <motion.img
        src={imageSrc}
        alt={alt}
        style={imageStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setImageLoaded(true)}
      />
      {overlay && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
