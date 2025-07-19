import { clsx } from 'clsx';

export const generateItemClasses = (isSelected: boolean) => {
  return clsx(
    'w-fit inline-flex items-center justify-center py-1.5 px-4 border rounded-[6px] bg-transparent text-white transition cursor-pointer hover:border-secondary hover:text-secondary',
    {
      'border-white text-black': isSelected,
    }
  );
};
