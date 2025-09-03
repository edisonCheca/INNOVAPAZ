import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

interface DecorativeImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  layout?: 'grid' | 'scattered' | 'inline';
  className?: string;
}

export const DecorativeImageGallery: React.FC<DecorativeImageGalleryProps> = ({
  images,
  layout = 'grid',
  className = '',
}) => {
  const containerClass = `decorative-gallery ${layout} ${className}`;

  const containerStyle: React.CSSProperties = {
    display: layout === 'grid' ? 'grid' : 'flex',
    gap: layout === 'grid' ? 'var(--spacing-lg)' : 'var(--spacing-md)',
    gridTemplateColumns: layout === 'grid' ? 'repeat(auto-fit, minmax(200px, 1fr))' : undefined,
    flexWrap: layout === 'inline' ? 'wrap' : undefined,
    justifyContent: layout === 'scattered' ? 'space-between' : 'center',
    alignItems: 'center',
    padding: layout === 'scattered' ? 'var(--spacing-2xl)' : 'var(--spacing-lg)',
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      className={containerClass}
      style={containerStyle}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={imageVariants}
          whileHover='hover'
          className='decorative-image floating-element'
          style={{
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.width || 200}
            height={image.height || 150}
            objectFit='cover'
            style={{
              borderRadius: 'var(--border-radius-lg)',
              boxShadow: 'var(--shadow-md)',
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DecorativeImageGallery;
