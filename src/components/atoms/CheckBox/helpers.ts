import { clsx } from 'clsx';

export const generateCheckClasses = (checked: boolean): string => {
  return clsx(
    'w-5 h-5 flex items-center justify-center p-0.5 border rounded-full bg-white transition-colors group-hover:bg-secondary',
    {
      'border-primary': checked,
      'border-secondary': !checked,
    }
  );
};

export const handleCheckboxChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  disabled: boolean,
  onChange: (checked: boolean) => void
) => {
  if (disabled) return;

  onChange?.(e.target.checked);
};
