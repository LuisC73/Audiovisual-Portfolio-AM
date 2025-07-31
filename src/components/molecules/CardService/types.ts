export type LabelTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface CardServiceProps {
  labelTag: LabelTag;
  label: string;
  description: string;
  className?: string;
}
