import { Img } from '@/components/atoms';
import { CardImageProps } from './types';
import { useFollowMouse } from '@/hooks';
import { generateButtonStyle } from './helpers';
import { CSSProperties } from 'react';

export const CardImage = ({ image, label }: CardImageProps) => {
  const { states, handlers } = useFollowMouse();
  const buttonStyle: CSSProperties = generateButtonStyle(
    states.position,
    states.isHovering
  );

  return (
    <div
      className="group relative h-fit w-fit cursor-pointer overflow-hidden rounded-2xl"
      onMouseMove={handlers.handleMouseMove}
      onMouseEnter={handlers.handleMouseEnter}
      onMouseLeave={handlers.handleMouseLeave}
    >
      <Img
        {...image}
        className="opacity-[2] transition group-hover:opacity-40"
      />
      <div
        className="absolute top-0 left-0 z-[2] flex h-12 w-12 items-center justify-center rounded-full bg-white transition-[opacity]"
        style={buttonStyle}
      >
        <span className="text-base text-black">Ver</span>
      </div>
      <div className="absolute bottom-0 left-0 h-fit w-full p-3 opacity-0 transition group-hover:opacity-100">
        <p className="text-base text-white">{label}</p>
      </div>
    </div>
  );
};
