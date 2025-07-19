import { ReactNode } from 'react';

export type LabelTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface AccordionProps {
  id: string;
  labelTag: LabelTag;
  label: string;
  place?: string;
  date?: string;
  isOpen?: boolean;
  children?: ReactNode;
  onClick: (id: string) => void;
}
