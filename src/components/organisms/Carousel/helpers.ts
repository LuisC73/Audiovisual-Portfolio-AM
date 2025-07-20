import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const getCarouselSlides = (
  children: ReactNode[],
  itemsPerSlide: number,
  shouldDuplicate: boolean
): ReactNode[][] => {
  const chunks: ReactNode[][] = [];

  for (let i = 0; i < children.length; i += itemsPerSlide) {
    chunks.push(children.slice(i, i + itemsPerSlide));
  }

  if (shouldDuplicate && chunks.length < 2) {
    return [...chunks, ...chunks];
  }

  return chunks;
};

export const generateCarouselClasses = (className?: string): string => {
  return twMerge('overflow-hidden', className);
};
