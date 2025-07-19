import { clsx } from 'clsx';
import { ColorSelect, VariantSelect } from './types';

export const generateSelectClasses = (variant: VariantSelect, color: ColorSelect): string => {
  return clsx('p-2 border rounded-[6px]', {
    'border-white bg-white': variant === 'filled' && color === 'primary',
    'border-black bg-black': variant === 'filled' && color === 'secondary',
    'border-white bg-transparent': variant === 'outline' && color === 'primary',
    'border-black bg-transparent': variant === 'outline' && color === 'secondary',
  });
};
