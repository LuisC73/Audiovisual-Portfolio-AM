import { twMerge } from 'tailwind-merge';

export const generateSectionTitleClasses = (className: string): string => {
  return twMerge('text-lg font-medium text-white', className);
};
