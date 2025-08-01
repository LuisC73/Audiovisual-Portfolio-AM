import { twMerge } from 'tailwind-merge';

export const generateDropdownClasses = (className?: string): string => {
  return twMerge(
    'absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50',
    className
  );
};
