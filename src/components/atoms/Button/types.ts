import { ButtonHTMLAttributes, ReactNode } from 'react';

export type VariantButton = 'filled' | 'outline' | 'text';

export type ColorButton = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantButton;
  color: ColorButton;
  children: ReactNode;
}
