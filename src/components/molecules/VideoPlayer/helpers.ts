import { twMerge } from 'tailwind-merge';

export const generateVideoClasses = (className?: string): string => {
  return twMerge('plyr-react plyr', className);
};
