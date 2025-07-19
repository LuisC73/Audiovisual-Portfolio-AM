import { clsx } from 'clsx';

export const generateChevronClasses = (isOpen: boolean): string => {
  return clsx('text-white transition group-hover:text-secondary', {
    'rotate-180': isOpen,
  });
};
