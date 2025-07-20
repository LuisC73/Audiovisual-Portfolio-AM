import { twMerge } from 'tailwind-merge';

export const generateContainerClasses = (className?: string): string => {
  return twMerge('max-w-[1200px] mx-auto', className);
};
