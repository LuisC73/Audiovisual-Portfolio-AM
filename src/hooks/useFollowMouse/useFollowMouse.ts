import { useState } from 'react';

export const useFollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, elementSize = 40) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const halfSize = elementSize / 2;
    const x = e.clientX - left - halfSize;
    const y = e.clientY - top - halfSize;

    setPosition({
      x: Math.max(0, Math.min(x, width - elementSize)),
      y: Math.max(0, Math.min(y, height - elementSize)),
    });
  };

  return {
    states: {
      position,
      isHovering,
    },
    handlers: {
      handleMouseMove,
      handleMouseEnter: () => setIsHovering(true),
      handleMouseLeave: () => setIsHovering(false),
    },
  };
};
