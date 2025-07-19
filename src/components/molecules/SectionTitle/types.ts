import { ReactNode } from 'react';

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface SectionTitleProps {
  tag: TitleTag;
  className?: string;
  children: ReactNode;
}
