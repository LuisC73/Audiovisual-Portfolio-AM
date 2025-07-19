import { Img } from '@/components/atoms';
import { CardImageProps } from './types';
import { useFollowMouse } from '@/hooks';
import { generateButtonStyle } from './helpers';
import { CSSProperties } from 'react';

export const CardImage = ({ image, label }: CardImageProps) => {
  const { states, handlers } = useFollowMouse();
  const buttonStyle: CSSProperties = generateButtonStyle(states.position, states.isHovering);

  return (
    <div
      className="relative w-fit h-fit rounded-2xl group overflow-hidden cursor-pointer"
      onMouseMove={handlers.handleMouseMove}
      onMouseEnter={handlers.handleMouseEnter}
      onMouseLeave={handlers.handleMouseLeave}
    >
      <Img
        {...image}
        className="opacity-[2] group-hover:opacity-40 transition"
      />
      <div
        className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center rounded-full bg-white transition-[opacity] z-[2]"
        style={buttonStyle}
      >
        <span className="text-base text-black">Ver</span>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-fit p-3 opacity-0 transition group-hover:opacity-100">
        <p className="text-base text-white">{label}</p>
      </div>
    </div>
  );
};
