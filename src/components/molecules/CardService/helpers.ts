import { twMerge } from 'tailwind-merge';

export const generateCardClasses = (className?: string): string => {
  return twMerge(
    'flex flex-col gap-5 items-start border-b border-secondary py-8 bg-tertiary',
    className
  );
};
