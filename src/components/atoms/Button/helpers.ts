import { clsx } from 'clsx';
import { ColorButton, VariantButton } from './types';
import { twMerge } from 'tailwind-merge';

export const generateButtonClasses = (
  variant: VariantButton = 'filled',
  color: ColorButton = 'primary',
  className?: string
): string => {
  return twMerge(
    clsx(
      'inline-flex items-center justify-center gap-2 py-3 px-8 border rounded-2xl text-base font-normal transition cursor-pointer',
      {
        'border-white bg-white text-black hover:bg-secondary':
          variant === 'filled' && color === 'primary',
        'border-black bg-black text-white hover:bg-black/70':
          variant === 'filled' && color === 'secondary',
        'border-white bg-transparent text-white': variant === 'outline' && color === 'primary',
        'border-black bg-transparent text-black': variant === 'outline' && color === 'secondary',
        'border-transparent bg-transparent text-white': variant === 'text' && color === 'primary',
        'border-transparent bg-transparent text-black': variant === 'text' && color === 'secondary',
      }
    ),
    className
  );
};
