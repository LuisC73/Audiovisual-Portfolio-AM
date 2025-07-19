import { ReactNode } from 'react';

export interface PaginationItemProps {
  id: string;
  isSelected: boolean;
  children: ReactNode;
  onClick: (id: string) => void;
}
