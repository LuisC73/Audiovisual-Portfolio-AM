import { ButtonProps } from '@/components/atoms/Button/types';
import { ReactNode } from 'react';

export interface DropdownProps {
  button: Omit<ButtonProps, 'children'>;
  buttonChildren: ReactNode;
  isOpen: boolean;
  className?: string;
  children: ReactNode;
  onToggle: () => void;
}
