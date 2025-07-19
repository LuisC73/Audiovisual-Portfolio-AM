import { twMerge } from 'tailwind-merge';

export const generateImgClasses = (className?: string) => {
  return twMerge('w-fit h-fit rounded-2xl overflow-hidden', className);
};
