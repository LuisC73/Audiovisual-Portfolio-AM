import Image from 'next/image';
import { ImgProps } from './types';
import { generateImgClasses } from './helpers';

export const Img = (props: ImgProps) => {
  const { src, alt, width, height, className, loading, onLoad } = props;
  const imgClass: string = generateImgClasses(className);

  return (
    <picture className={imgClass}>
      <Image
        src={src}
        alt={alt}
        width={width || 100}
        height={height || 100}
        loading={loading}
        onLoad={onLoad}
      />
    </picture>
  );
};
