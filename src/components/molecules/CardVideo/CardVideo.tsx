import { Img } from '@/components/atoms';
import { CardVideoProps } from './types';
import { Play } from 'lucide-react';

export const CardVideo = (props: CardVideoProps) => {
  const { id, src, poster, title, description, date, width, height, onClick } =
    props;

  return (
    <div
      className="group relative h-fit w-fit cursor-pointer overflow-hidden rounded-2xl"
      onClick={() => onClick?.(id)}
    >
      {src && (
        <video
          src={src}
          autoPlay
          loop
          muted
          width={width}
          height={height}
          className="opacity-80 transition group-hover:opacity-60"
        />
      )}
      {poster && (
        <Img
          src={poster}
          alt={title || ''}
          className=""
          width={width}
          height={height}
        />
      )}
      <div className="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center">
          <Play size={24} fill="#fff" className="text-white" />
        </div>
        <span className="text-sm text-white opacity-0 transition group-hover:opacity-100">
          Ver video
        </span>
      </div>
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-3">
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-medium text-white">{title}</h5>
          <p className="text-sm text-white">{description}</p>
        </div>
        <p className="text-sm text-white">{date}</p>
      </div>
    </div>
  );
};
