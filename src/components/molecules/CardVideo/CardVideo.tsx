import { Img } from '@/components/atoms';
import { CardVideoProps } from './types';
import { Play } from 'lucide-react';

export const CardVideo = (props: CardVideoProps) => {
  const { id, src, poster, title, description, date, width, height, onClick } = props;

  return (
    <div
      className="relative w-fit h-fit rounded-2xl group cursor-pointer overflow-hidden"
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
          className="opacity-80 group-hover:opacity-60 transition"
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
      <div className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center gap-1 -translate-1/2">
        <div className="flex items-center justify-center">
          <Play
            size={24}
            fill="#fff"
            className="text-white"
          />
        </div>
        <span className="text-sm text-white opacity-0 transition group-hover:opacity-100">
          Ver video
        </span>
      </div>
      <div className="absolute left-0 bottom-0 w-full flex items-center justify-between p-3">
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-medium text-white">{title}</h5>
          <p className="text-sm text-white">{description}</p>
        </div>
        <p className="text-sm text-white">{date}</p>
      </div>
    </div>
  );
};
