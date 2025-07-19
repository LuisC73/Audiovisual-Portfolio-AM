import { CSSProperties } from 'react';

export const generateButtonStyle = (
  position: { x: number; y: number },
  isHovering: boolean
): CSSProperties => {
  return {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: isHovering ? 1 : 0,
    pointerEvents: 'none' as const,
  };
};
