import LazyLoad from 'react-lazyload';
import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  height?: number | string;
  offset?: number;
}

export function LazyImage({
  src,
  alt,
  placeholder,
  style,
  className,
  height = 400,
  offset = 100
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LazyLoad height={height} offset={offset} once>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: placeholder || 'rgba(255, 255, 255, 0.05)',
        ...style
      }}>
        {!isLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s infinite'
          }} />
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0.5,
            transition: 'opacity 0.3s ease'
          }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </LazyLoad>
  );
}
