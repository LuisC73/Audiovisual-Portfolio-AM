import { ReactNode } from 'react';

export interface ExternalLinkProps {
  href: string;
  title: string;
  ariaLabel?: string;
  children: ReactNode;
}
