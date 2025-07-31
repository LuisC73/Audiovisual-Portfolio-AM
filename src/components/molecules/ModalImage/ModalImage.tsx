import { useState } from 'react';
import { ModalImageProps } from './types';
import { Img } from '@/components/atoms';

export const ModalImage = ({ src, alt, className }: ModalImageProps) => {
  const [loading, setLoading] = useState(false);

  const handleImageLoad = () => {
    setLoading(true);
  };

  return (
    <div className="w-full">
      {!loading && (
        <div className="bg-gray-color aspect-video w-full animate-pulse rounded-md" />
      )}
      <Img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
        onLoad={handleImageLoad}
      />
    </div>
  );
};
